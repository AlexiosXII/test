import Router from 'koa-router'
import combineRouters from 'koa-combine-routers'

import ExampleRoute from './example'

const defaultRouter = new Router()

defaultRouter.get('/', (ctx) => (ctx.body = { sucess: true }))
defaultRouter.get(
  `/${process.env.VERSION}/${process.env.SERVICE_NAME}`,
  (ctx) => (ctx.body = { sucess: true })
)

const router = combineRouters(defaultRouter, ExampleRoute)

export default router
