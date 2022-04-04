import { v4 as uuid } from "uuid";

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
    image:
      "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    upcoming: true,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Floral Dress",
    subTitle: "dress",
    price: 3199,
    categoryName: "Women-Wear",
    image:
      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    upcoming: true,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Floral Dress",
    price: 2600,
    categoryName: "Women-Wear",
    image:
      "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    upcoming: false,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Dress",
    price: 2000,
    categoryName: "Women-Wear",
    image:
      "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    upcoming: true,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Sandal",
    price: 8299,
    categoryName: "Shoes",
    image:
      "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    upcoming: true,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Bag",
    price: 20199,
    categoryName: "Bag",
    image:
      "https://images.pexels.com/photos/7319116/pexels-photo-7319116.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    upcoming: true,
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "T-Shirts",
    price: 18999,
    categoryName: "Women-Wear",
    image:
      "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    upcoming: true,
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Lipsticks",
    price: 25499,
    categoryName: "Makeup",
    image:
      "https://images.pexels.com/photos/301367/pexels-photo-301367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    upcoming: true,
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Brown Lipsticks",
    price: 28599,
    categoryName: "Makeup",
    image:
      "https://images.pexels.com/photos/4699180/pexels-photo-4699180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    upcoming: false,
    rating: 1,
  },
  {
    _id: uuid(),
    title: "Makeup Brush",
    price: 26999,
    categoryName: "Makeup",
    image:
      "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    upcoming: false,
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Women Hygiene",
    price: 5800,
    categoryName: "Hygiene",
    image:
      "https://images.pexels.com/photos/5218033/pexels-photo-5218033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    upcoming: false,
    rating: 4,
  },
];
