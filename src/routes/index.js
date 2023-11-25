import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const route=[
    {
        name:'Home',
        path:'/',
        component:<Home/>
    },
    {
        name:'About',
        path:'/about',
        component:<About/>
    },
    {
        name:'Cart',
        path:'/cart',
        component:<Cart/>
    }
]
export default route