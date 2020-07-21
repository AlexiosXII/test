import Joi from '@hapi/joi'

const validator = {
    queryExample: {
        query: Joi.object({
            name: Joi.string().required(),
            age: Joi.number().optional()
        })
    },
    bodyExample: {
        body: Joi.object({
            name: Joi.string().required(),
            age: Joi.number().optional()
        })
    }
}

export default validator