import { fetchGet } from "./public";
let baseUrl = "http://localhost:8000/api";
export const companyInfo = () => {
    return fetchGet(`${baseUrl}/admin/company`);
}
