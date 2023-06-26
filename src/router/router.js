import IndexPage from "../page/IndexPage"
import ProductListPage from "../page/ProductListPage"
import ProductDetailPage from "../page/ProductDetailPage"
import ApplicationPage from "../page/ApplicationPage"
import ServiceListPage from "../page/ServiceListPage"
let routes = [
    {
        path: "/",
        component: IndexPage
    },
    {
        path:"application",
        component:ApplicationPage
    },
    {
        path:"serviceList",
        component:ServiceListPage
    },
    {
        path:"productList",
        component:ProductListPage,
        children:[
            { path:"productDetail",component:ProductDetailPage}
        ]
    }
];
export default routes;