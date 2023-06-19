import http from "./public.js"
let baseUrl = "http://localhost:8000/api";
const companyInfo = () => {
    return http.fetchGet(`${baseUrl}/admin/company`);
}
module.exports = {
    companyInfo
}
