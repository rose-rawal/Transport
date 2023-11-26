import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

import Store from "../pages/Store";

const route=[
    {
        name:'Home',
        path:'/',
        component:<Home/>
    },
    {
        name:'Store',
        path:'/store',
        component:<Store/>
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
    },
]
export default route