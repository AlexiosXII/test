import HttpStatus from 'http-status-codes'

const validate = (schema) => {
    return function (ctx, next) {
        if (!schema) return next()

        const keys = ['params', 'body', 'query']
        let errorDetails = []

        keys.forEach(async (key) => {
            if (key === 'body') ctx.body = ctx.request.body

            if (ctx[key] && schema[key]) {
                const { value, error } = schema[key].validate(ctx[key], {
                    abortEarly: false
                })

                if (error) {
                    errorDetails = errorDetails.concat(error.details)
                }
            }

            ctx.body = undefined
        })

        console.log(errorDetails)

        if (errorDetails.length > 0) {
            const errorRespone = {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Missing parameter or invalid data',
                data:
                    errorDetails &&
                    errorDetails.map((err) => ({
                        message: err.message,
                        field: err.path[0]
                    }))
            }
            
            ctx.status = HttpStatus.BAD_REQUEST
            ctx.body = errorRespone
        }
        else return next()
    }
}

export default validate
