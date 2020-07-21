import Router from 'koa-router'
import Validate from '../utils/joi'
import Schema from '../validators/example'
import { helloGet, helloPost } from '../controllers/example'

const router = new Router()

router.prefix(`/${process.env.VERSION}/${process.env.SERVICE_NAME}/example`)

router
    .get(`/`, ctx => ctx.body = { route: "GET method" })
    .post(`/`, ctx => ctx.body = { route: "POST method" })
    .put(`/`, ctx => ctx.body = { route: "PUT method" })
    .delete(`/`, ctx => ctx.body = { route: "DELETE method" })
    .get(`/validate`, Validate(Schema.queryExample), helloGet)
    .post(`/validate`, Validate(Schema.bodyExample), helloPost)

export default router