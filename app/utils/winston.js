import fs from 'fs'
import winston, { format } from 'winston'
// import WinstonCloudWatch from 'winston-cloudwatch'

const { combine, timestamp, label, printf } = format
const path = `${process.cwd()}/logs`

if (!fs.existsSync(path)) fs.mkdirSync(path)

const myFormat = printf(info => `${info.timestamp}  ${info.level} => ${info.message}`)

const logger = winston.createLogger({
	level: process.env.LOG_LEVEL,
	format: combine(
		winston.format.colorize(),
		winston.format.json(),
		label({ label: process.env.NAME }),
		timestamp(),
		myFormat
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: `${path}/app.log` })
	]
})

// if (process.env.NODE_ENV !== 'local' && process.env.LOG_ACTIVE === 'true') {
// 	const cloudwatchConfig = {
// 		level: process.env.LOG_LEVEL,
// 		logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
// 		logStreamName: process.env.CLOUDWATCH_STREAM_NAME,
// 		awsAccessKeyId: process.env.CLOUDWATCH_ACCESS_KEY,
// 		awsSecretKey: process.env.CLOUDWATCH_SECRET_ACCESS_KEY,
// 		awsRegion: process.env.CLOUDWATCH_REGION,
// 		messageFormatter: info => info.level + "=>" + info.message
// 	}

// 	logger.add(new WinstonCloudWatch(cloudwatchConfig))
// }

logger.stream = {
	write: (message, encoding) => {
		// use the 'info' log level so the output will be picked up by both transports (file and console)
		logger.info(message)
	}
}

module.exports = logger
