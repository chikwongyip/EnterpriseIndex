import { fetchPost } from "./public";
let baseUrl = process.env.VUE_APP_KOA2
export const login = (param) => {
    return fetchPost(baseUrl, param)
}