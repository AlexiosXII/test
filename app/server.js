import koa from 'koa'
import koaBody from 'koa-body'
import koaMogan from 'koa-morgan'
import http from 'http'
import cors from '@koa/cors'
import dbConnector from './configs/database'

import router from './routes'
import logger from './utils/winston'

global.logger = logger

const app = new koa()

app
    .use(cors())
    .use(koaBody({ multipart: true }))
    .use(koaMogan('combined', { stream: logger.stream }))
    .use(router())

const port = process.env.PORT || 3000
const server = http.createServer(app.callback())

dbConnector
    .authenticate()
    .then(async () => {
        logger.log('[database] connection has been established successfully.')
    })
    .catch(err => {
        logger.error('[database] Unable to connect to the database:', err)
    })

dbConnector.sync()
// dbConnector.sync({
//     alter: true
// })

server
    .listen(port)
    .on('listening', function () {
        const addr = server.address()
        const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port

        logger.info('Listening on ' + bind)
    })
    .on('error', function (error) {
        if (error.syscall !== 'listen') throw error

        const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES': 
                logger.error(bind + ' requires elevated privileges')
                process.exit(1)
            case 'EADDRINUSE':
                logger.error(bind + ' is already in use')
                process.exit(1)
            default: throw error
        }
    })