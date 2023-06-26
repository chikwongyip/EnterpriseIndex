import IndexPage from "../page/IndexPage";
import IndexMain from "../components/IndexMain";
import ApplicationMain from "../components/ApplicationMain";
import ServiceMain from "../components/ServiceMain";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

let routes = [
    {
        path: "/",
        component: IndexPage,
        children:[
            { path:"index",component:IndexMain},
            { path:"application",component:ApplicationMain},
            { path:"service",component:ServiceMain},
            { path:"productList",component:ProductList},
            { path:"productDetail",component:ProductDetail}
        ]
    }
];
export default routes;