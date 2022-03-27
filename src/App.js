import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forget from "./pages/Forget";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductItems from "./pages/ProductItems";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import WomenCart from "./pages/WomenCart";
import WomenProducts from "./womenFrontPage/WomenProducts";

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
