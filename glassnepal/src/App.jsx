import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Mens from "./categories/Categorys";
import Women from "./categories/Women";
import About from "./pages/About";
import Sunglass from "./categories/Sunglass";
import SportGlass from "./categories/SportGlass"
import ProductDetails from "./components/ProductDetails";
import Admin from "./pages/Admin";
import Dashboard from "./components/admin/Dashboard";
import { ToastContainer } from "react-toastify";
import Order from "./components/admin/Order";
import MainHome from "./components/admin/MainHome";
import Product from "./components/admin/Product";
import Checkout from "./pages/Checkout";
import Categorys from "./categories/Categorys";


const myroute = createBrowserRouter([
  {path:"",Component:Home},
  {path:"home",Component:Home},
  {path:"product",Component:Products},
  {path:"product/:id",Component:ProductDetails},
  {path:"categories/:categoryName/:id",Component:Categorys},
  // {path:"categories/women",Component:Women},
  // {path:"categories/sunglass",Component:Sunglass},
  // {path:"categories/sportglass",Component:SportGlass},
  {path:"about-us",Component:About},
  {path:"admin",Component:Admin},
  {path:"checkout",Component:Checkout},
  {path:"dashboard",Component:Dashboard,children:[
    {path:"",Component:MainHome},
    {path:"home",Component:MainHome},
    {path:"order",Component:Order},
    {path:"products",Component:Product},
    
  ]},  
  {path:"*",Component:Error}
  
])
const App = () => {
  return (
    <>
   <RouterProvider router={myroute}/>
         <ToastContainer />

    </>
  );
};
export default App;
