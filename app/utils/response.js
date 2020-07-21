import HttpStatus from 'http-status-codes'

const onSuccess = (ctx, options = {}) => {
    const statusCode = options.statusCode || HttpStatus.OK
    const message = options.message || HttpStatus.getStatusText(statusCode)
    const data = options.data || {}

    ctx.status = statusCode
    ctx.body = { statusCode, message, data }
}

const onError = (ctx, options = {}) => {
    const statusCode = options.statusCode || HttpStatus.BAD_REQUEST
    const message = options.message || HttpStatus.getStatusText(statusCode)
    const error = options.error || { errorCode: '', errorMessage: '' }

    ctx.status = statusCode
    ctx.body = { statusCode, message, data: error }
}

const serverError = (ctx, error = {}) => {
    ctx.status = HttpStatus.INTERNAL_SERVER_ERROR
    ctx.body = { statusCode, message: 'Internal Server Error', data: error }
}

export default {
    onSuccess,
    onError,
    serverError
}