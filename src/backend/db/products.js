import { v4 as uuid } from "uuid";
import dress1 from "../../assets/image.jpeg";
import dress2 from "../../assets/image1.jpeg";
import dress3 from "../../assets/image2.jpeg";
import dress4 from "../../assets/img2.jpeg";
import shoes1 from "../../assets/shoes1.jpeg";
import dress5 from "../../assets/image3.jpeg";
import bag1 from "../../assets/bag1.jpeg";
import makeup1 from "../../assets/makeup1.jpeg";
import makeup2 from "../../assets/makeup2.jpeg";
import makeup3 from "../../assets/makeup3.jpeg";
import hygiene from "../../assets/hygiene.jpeg";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Floral Dress",
    subTitle: "Dress",
    price: 7699,
    categoryName: "Women-Wear",
    image: dress1,
    upcoming: true,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Floral Dress",
    subTitle: "dress",
    price: 3199,
    categoryName: "Women-Wear",
    image: dress2,
    upcoming: true,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Floral Dress",
    price: 2600,
    categoryName: "Women-Wear",
    image: dress3,
    upcoming: false,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Dress",
    price: 2000,
    categoryName: "Women-Wear",
    image: dress5,
    upcoming: true,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Sandal",
    price: 8299,
    categoryName: "Shoes",
    image: shoes1,
    upcoming: true,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Bag",
    price: 20199,
    categoryName: "Bag",
    image: bag1,
    upcoming: true,
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "T-Shirts",
    price: 18999,
    categoryName: "Women-Wear",
    image: dress4,
    upcoming: true,
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Lipsticks",
    price: 25499,
    categoryName: "Makeup",
    image: makeup3,
    upcoming: true,
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Brown Lipsticks",
    price: 28599,
    categoryName: "Makeup",
    image: makeup1,
    upcoming: false,
    rating: 1,
  },
  {
    _id: uuid(),
    title: "Makeup Brush",
    price: 26999,
    categoryName: "Makeup",
    image: makeup2,
    upcoming: false,
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Women Hygiene",
    price: 5800,
    categoryName: "Hygiene",
    image: hygiene,
    upcoming: false,
    rating: 4,
  },
];
