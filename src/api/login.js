import { fetchPost } from "./public";
let baseUrl = process.env.VUE_APP_URL
export const login = (param) => {
    return fetchPost(baseUrl, param)
}