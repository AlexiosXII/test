import jwt from 'jsonwebtoken'

export default async function (ctx, next) {
    const authHeader = ctx.request.header.authorization

    if (authHeader) {
        const access_token = authHeader.match(/Bearer (.*)/)[1]
        let decoded

        try {
            decoded = await jwt.decode(access_token)
        } catch (e) {
            ctx.throw(401, e.message)
        }

        if (decoded) {
            ctx.user = decoded

            return next()
        }
        else {
            ctx.throw(401)
        }

        return next()
    }
    else {
        ctx.user = {}

        return next()
    }
}
