import Response from '../utils/response'

export const helloGet = ctx => {
    return Response.onSuccess(
        ctx,
        {
            data: { message: `Hello ${ctx.query.name}` }
        }
    )
}

export const helloPost = ctx => {
    return Response.onSuccess(
        ctx,
        {
            data: { message: `Hello ${ctx.request.body.name}` }
        }
    )
}