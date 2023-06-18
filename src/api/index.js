import http from "./public.js"
let baseUrl = "http://localhost:8000/api";
export const companyInfo = () => {
    return http.fetchGet(`${baseUrl}/admin/company`);
}
