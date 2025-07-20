import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Mens from "./categories/Mens";
import Women from "./categories/Women";
import About from "./pages/About";
import Sunglass from "./categories/Sunglass";
import SportGlass from "./categories/SportGlass"
import ProductDetails from "./components/ProductDetails";


const myroute = createBrowserRouter([
  {path:"",Component:Home},
  {path:"/home",Component:Home},
  {path:"/product",Component:Products},
  {path:"/product/:id",Component:ProductDetails},
  {path:"/categories/men",Component:Mens},
  {path:"/categories/women",Component:Women},
  {path:"/categories/sunglass",Component:Sunglass},
  {path:"/categories/sportglass",Component:SportGlass},
  {path:"/about-us",Component:About},
  {path:"*",Component:Error}
  
])
const App = () => {
  return (
    <>
   <RouterProvider router={myroute}/>
    </>
  );
};
export default App;
