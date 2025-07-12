import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Product from "../pages/Product.jsx";
import Contact from "../pages/Contact.jsx";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "",
                element : <Home />
            },
            {
                path : "/product",
                element : <Product/>
            },
            {
                path : "/contact",
                element : <Contact />
            }
        ]
    }
])


export default router