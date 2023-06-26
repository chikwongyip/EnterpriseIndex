import IndexPage from "../page/IndexPage"
import ApplicationMain from "../components/ApplicationMain"
import ProductDetail from "../components/ProductDetail"
import ProductList from "../components/ProductList"
import ServiceMain from "../components/ServiceMain"

let routes = [
    {
        path: "/",
        component: IndexPage,
        children:[
            { path:"productList",component:ProductList },
            { path:"productDetail",component:ProductDetail },
            { path:"application",component:ApplicationMain },
            { path:"service",component:ServiceMain }
        ]
    }
];
export default routes;