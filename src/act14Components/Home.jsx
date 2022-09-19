import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const products = [
    {
      name: "headphones",
      imgUrl:
        "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "watch",
      imgUrl:
        "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "donuts",
      imgUrl:
        "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg",
    },
    {
      name: "shoes",
      imgUrl:
        "https://images.pexels.com/photos/13236694/pexels-photo-13236694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "gopro",
      imgUrl:
        "https://images.pexels.com/photos/11031052/pexels-photo-11031052.jpeg?cs=srgb&dl=pexels-moises-ribeiro-11031052.jpg&fm=jpg",
    },
    {
      name: "laptop",
      imgUrl:
        "https://images.pexels.com/photos/4058226/pexels-photo-4058226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="home-products">
      {products.map((product) => (
        <Link
          key={product.name}
          className="home-products--transparent"
          to={`/${product.name}`}
        >
          <img src={product.imgUrl} alt={product.name} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
