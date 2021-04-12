const axios = require('axios');

const catsAPI = () => {
    return axios.create({
        headers: {
            "x-api-key": process.env.API_KEY
        },
        baseURL: "https://api.thecatapi.com/v1"
    })
}

module.exports = catsAPI;