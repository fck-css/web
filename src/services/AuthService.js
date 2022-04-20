import createHttp from "./BaseService";

const http = createHttp({ useAccessToken: false })

export const register = (data) => http.post('/users', data)
export const login = (data) => http.post('/login', data)