import IndexPage from "@/page/IndexPage";
import ServicePage from "@/page/ServicePage";
import ProductListPage from "@/page/ProductListPage.vue";
import ProductDetailPage from "@/page/ProductDetailPage.vue";
let routes = [
    {
        path: "/",
        component: IndexPage
    },
    {
        path: "/service",
        component: ServicePage
    },
    {
        path: "/productList",
        component: ProductListPage
    },
    {
        path:"/productDetail",
        component:ProductDetailPage
    }
];
export default routes;