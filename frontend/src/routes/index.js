import Adminpanel from "../pages/Adminpanel";
import AllProducts from "../pages/AllProducts";
import AllUsers from "../pages/AllUsers";
import Cancel from "../pages/Cancel";
import Cart from "../pages/Cart";
import CategoryProduct from "../pages/CategoryProduct";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OrderPages from "../pages/OrderPages";
import ProductDetails from "../pages/ProductDetails";
import SearchProduct from "../pages/SearchProduct";
import SignUp from "../pages/SignUp";
import Success from "../pages/Success";

const { createBrowserRouter } = require("react-router-dom");
const { default: App } = require("../App");


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path: "login",
                element : <Login/>
            },
            {
                path: "forgot-password",
                element : <ForgotPassword/>
            },
            {
                path: "sign-up",
                element : <SignUp/>
            },
            {
                path: "product-category",
                element : <CategoryProduct/>
            },
            {
                path: "product/:id",
                element : <ProductDetails/>
            },
            {
                path: "cart",
                element : <Cart/>
            },
            {
                path : "success",
                element : <Success/>
            },
            {
                path : "cancel",
                element : <Cancel/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : "order",
                element : <OrderPages/>
            },
            {
                path: "admin-panel",
                element : <Adminpanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    },
                    
                ]
            },
        ]
    }
])

export default router;