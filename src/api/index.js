import { fetchGet } from "./public";
let baseUrl = "http://localhost:8000/api";
export const companyInfo = () => {
    return fetchGet(`${baseUrl}/admin/company`);
}
export const applicationList = () => {
    return fetchGet(`${baseUrl}/admin/applicationList`)
}
export const getProduct = () => {
    return fetchGet(`${baseUrl}/admin/productList`)
}
