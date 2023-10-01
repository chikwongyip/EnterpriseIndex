import { fetchGet } from "./public";
let baseUrl = process.env.VUE_APP_URL;
export const companyInfo = () => {
    return fetchGet(`${baseUrl}/admin/company`);
}
export const applicationList = () => {
    return fetchGet(`${baseUrl}/admin/applicationList`)
}
export const getProduct = (params) => {
    return fetchGet(`${baseUrl}/admin/productList`, params)
}
export const getService = () => {
    return fetchGet(`${baseUrl}/admin/serviceList`)
}
export const getBrand = () => {
    return fetchGet(`${baseUrl}/admin/brandList`)
}
export const getActiveImage = () => {
    return fetchGet(`${baseUrl}/admin/activeImage`)
}
export const getProductById = (id) => {
    return fetchGet(`${baseUrl}/admin/productList`, { id: id })
}
export const getCategory = () => {
    return fetchGet(`${baseUrl}/admin/categoryList`)
}
export const getDocs = () => {
    return fetchGet(`${baseUrl}/admin/getDocs`)
}