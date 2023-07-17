import { fetchGet } from "./public";
let baseUrl = "http://120.77.25.98:8000/api";
export const companyInfo = () => {
    return fetchGet(`${baseUrl}/admin/company`);
}
export const applicationList = () => {
    return fetchGet(`${baseUrl}/admin/applicationList`)
}
export const getProduct = () => {
    return fetchGet(`${baseUrl}/admin/productList`)
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
    return fetchGet(`${baseUrl}/admin/productList`,{id:id})
}
export const getCategory = () => {
    return fetchGet(`${baseUrl}/admin/categoryList`)
}
