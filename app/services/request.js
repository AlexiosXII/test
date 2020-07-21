import axios from 'axios'

export const get = (url, qs = {}, headers = {}) => {
    logger.debug(`Get request to ${url}`)

    return new Promise(function (resolve, reject) {
        axios({
                uri: url,
                headers,
                method: 'GET',
                json: true,
                qs
            },
            function (error, response, body) {
                logger.debug(`Error response ${JSON.stringify(error)}`)
                logger.debug(`Response body ${JSON.stringify(body)}`)

                error ? reject(error) : resolve(body)
            }
        )
    })
}

export const post = (url, body, headers = {}) => {
    logger.debug(`Post request to ${url} with body ${JSON.stringify(body)}`)

    return new Promise(function (resolve, reject) {
        axios({
                uri: url,
                headers,
                method: 'POST',
                json: body
            },
            function (error, response, body) {
                logger.debug(`Error response ${JSON.stringify(error)}`)
                logger.debug(`Response body ${JSON.stringify(body)}`)

                if (error) reject(error)
                else if (response.statusCode !== 200) return reject(body)
                else return resolve(body)
            }
        )
    })
}

export const put = (url, body, headers = {}) => {
    logger.debug(`PUT request to ${url} with body ${JSON.stringify(body)}`)

    return new Promise(function (resolve, reject) {
        axios({
                uri: url,
                headers,
                method: 'PUT',
                json: body
            },
            function (error, response, body) {
                logger.debug(`Error response ${JSON.stringify(error)}`)
                logger.debug(`Response body ${JSON.stringify(body)}`)

                error ? reject(error) : resolve(body)
            }
        )
    })
}

export const del = (url, body = {}) => {
    logger.debug(`Request delete to ${url} with body ${JSON.stringify(body)}`)

    return new Promise((resolve, reject) => {
        axios({
                uri: url,
                method: 'DELETE',
                json: body
            },
            function (error, response, body) {
                logger.debug(`Error response ${JSON.stringify(error)}`)
                logger.debug(`Response body ${JSON.stringify(body)}`)

                error ? reject(error) : resolve(body)
            }
        )
    })
}
