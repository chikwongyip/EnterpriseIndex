import { fetchPost } from "./public";
let baseUrl = process.env.VUE_APP_KOA
export const login = (param) => {
    return fetchPost(`${baseUrl}/user/login`, param)
}