import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forget from "./pages/Forget/index";
import Home from "./pages/Home";
import Login from "./pages/Login/index";
import ProductItems from "./pages/ProductItems/index";
import Register from "./pages/Register/index";
import SingleProduct from "./pages/SingleProduct/index.jsx";
import WomenCart from "./pages/WomenCart/index";
import WomenProducts from "./womenFrontPage/WomenProducts/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-list" element={<ProductItems />} />
        <Route path="/women-product" element={<WomenProducts />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/forgot-password" element={<Forget />} />
        <Route path="/cart" element={<WomenCart />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
