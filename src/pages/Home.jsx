import { Announce } from "../womenFrontPage/Announce";
import { Category } from "../womenFrontPage/Category";
import { Footer } from "../womenFrontPage/Footer";
import { LastFooter } from "../womenFrontPage/LastFooter";
import { Nav } from "../womenFrontPage/Nav";
import { Slide } from "../womenFrontPage/Slide";
import WomenProducts from "../womenFrontPage/WomenProducts";

export default function Home() {
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
