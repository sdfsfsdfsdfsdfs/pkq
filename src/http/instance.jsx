import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 50000,
    mothod: "get"
})

instance.interceptors.request.use(config => {
    return config
}, (err) => {
    return Promise.reject(err)
})
instance.interceptors.response.use(config => {
    return config
}, (err) => {
    return Promise.reject(err)
})

export default instance