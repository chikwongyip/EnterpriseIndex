import IndexPage from "@/page/IndexPage";
import ProductListPage from "@/page/ProductListPage.vue";
import ProductDetailPage from "@/page/ProductDetailPage.vue";
import LoginPage from "@/page/LoginPage.vue";
let routes = [
    {
        path: "/",
        component: IndexPage,
        name:"index"
    },
    {
        path: "/productList",
        component: ProductListPage,
        name:"productList"
    },
    {
        path:"/productDetail",
        component:ProductDetailPage,
        name:"productDetail"
    },
    {
        path: "/productSearch",
        component: ProductListPage,
        name:"productSearch"
    },
    {
        path: "/login",
        component: LoginPage,
        name:"login"
    }
];
export default routes;