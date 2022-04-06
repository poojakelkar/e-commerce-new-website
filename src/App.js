import { Route, Routes } from "react-router-dom";
import Forget from "./pages/Forget/index.jsx";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProductItems from "./pages/ProductItems/index";
import Register from "./pages/Register/index";
import SingleProduct from "./pages/SingleProduct/index.jsx";
import WomenCart from "./pages/WomenCart/index";
import WomenProducts from "./womenFrontPage/WomenProducts/index";
import { StateContext } from "./Context";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./pages/Wishlist";

function App() {
  const { state, dispatch } = useContext(StateContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/products", { method: "GET" });
        const data = await res.json();
        dispatch({ type: "SET_PRODUCTS", payload: data.products });
      } catch (e) {
        console.log(state);
      }
    }
    fetchData();
  }, [state, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-list" element={<ProductItems />} />
        <Route path="/women-product" element={<WomenProducts />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/forgot-password" element={<Forget />} />
        <Route path="/cart" element={<WomenCart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
