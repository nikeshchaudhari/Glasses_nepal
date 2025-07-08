import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";

const myroute = createBrowserRouter([
  {path:"",Component:Home},
  {path:"/home",Component:Home},
  {path:"/product",Component:Products},
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
