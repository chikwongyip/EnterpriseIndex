import IndexPage from "@/page/IndexPage";
import ServicePage from "@/page/ServicePage";
import ProductListPage from "@/page/ProductListPage.vue";
import ProductDetailPage from "@/page/ProductDetailPage.vue";
let routes = [
    {
        path: "/",
        component: IndexPage,
        name:"index"
    },
    {
        path: "/service",
        component: ServicePage,
        name:"service"
    },
    {
        path: "/productList",
        component: ProductListPage,
        name:"productList"
    },
    {
        path:"/productDetail/:product_id",
        component:ProductDetailPage,
        name:"productDetail"
    },
    {
        path: "/productSearch",
        component: ProductListPage,
        name:"productSearch"
    }
];
export default routes;