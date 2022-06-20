import { useContext, useEffect } from "react";
import { StateContext } from "../Context";
import { Announce } from "../womenFrontPage/Announce";
import { Category } from "../womenFrontPage/Category";
import { Footer } from "../womenFrontPage/Footer";
import { LastFooter } from "../womenFrontPage/LastFooter";
import { Nav } from "../womenFrontPage/Nav";
import { Slide } from "../womenFrontPage/Slide";
import WomenProducts from "../womenFrontPage/WomenProducts";

export default function Home() {
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    console.log("line 15");
    async function fetchData() {
      try {
        const res = await fetch("/api/categories", { method: "GET" });
        const data = await res.json();
        console.log("line 20", data);
        dispatch({ type: "SET_CATEGORIES", payload: data.categories });
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [dispatch]);
  return (
    <div>
      <Announce />
      <Nav />
      <Slide />
      <Category />
      <WomenProducts />
      <Footer />
      <LastFooter />
    </div>
  );
}
