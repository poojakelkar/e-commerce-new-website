import { v4 as uuid } from "uuid";
import image1 from "../../assets/keyboard-1.jpg";
import image2 from "../../assets/keyboard-2.jpg";
import image3 from "../../assets/keyboard-3.jpg";
import image4 from "../../assets/keyboard-4.jpg";
import image5 from "../../assets/keyboard-5.jpg";
import image6 from "../../assets/keyboard-6.jpg";
import image7 from "../../assets/keyboard-7.jpg";
import image8 from "../../assets/keyboard-8.jpg";
import image9 from "../../assets/keyboard-9.jpg";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Keychron K2",
    subTitle: "(HOT-SWAPPABLE)",
    price: 7699,
    categoryName: "compactKeyboards",
    image:
      "https://www.meckeys.com/wp-content/uploads/2021/08/K2%E5%8F%AF%E6%8F%92%E6%8B%94%E9%93%9D%E5%90%88%E9%87%91-min-262x175.jpg",
    upcoming: true,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Keychron K2",
    subTitle: "",
    price: 7199,
    categoryName: "compactKeyboards",
    image:
      "https://www.meckeys.com/wp-content/uploads/2021/03/K2-ALUM_RGB-262x175.jpeg",
    upcoming: true,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Cyber Moon Keyboard",
    price: 26296,
    categoryName: "shortKeyboards",
    image: image1,
    upcoming: false,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Hot-Swappable Keyboard",
    price: 25296,
    categoryName: "customKeyboards",
    image: image2,
    upcoming: false,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Keychron K2 Keyboard",
    price: 8299,
    categoryName: "compactKeyboards",
    image: image3,
    upcoming: false,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Purple Midnight Keyboard",
    price: 20199,
    categoryName: "shortKeyboards",
    image: image4,
    upcoming: false,
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "Mechanical Keyboards",
    price: 18999,
    categoryName: "compactKeyboards",
    image: image5,
    upcoming: false,
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Preonic Keyboard MX Kit",
    price: 25499,
    categoryName: "customKeyboards",
    image: image6,
    upcoming: false,
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Islay Night Keyboard",
    price: 28599,
    categoryName: "customKeyboards",
    image: image7,
    upcoming: false,
    rating: 1,
  },
  {
    _id: uuid(),
    title: "Zodiac Keyboard",
    price: 26999,
    categoryName: "shortKeyboards",
    image: image8,
    upcoming: false,
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Split Keyboard",
    price: 26296,
    categoryName: "splitKeyboards",
    image: image9,
    upcoming: false,
    rating: 4,
  },
];
