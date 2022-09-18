/* import React, { useRef, useState } from "react"; */
import React from "react";
import "./App.css";
/* import img1 from "./assets/images/asa-yuri.jpg";
import img2 from "./assets/images/mikael.jpg";
import img3 from "./assets/images/menta.jpg";
import imgOk from "./assets/images/ok.jpg"; */
/* import ProductCard from "./ProductCard"; */
// import Act7 from "./Act7";
// import Act8 from "./Act8";
// import Act9 from "./Act9";
// import Act10 from "./Act10";
// import Act11 from "./Act11";
// import Act12 from "./Act12";
// import Act13 from "./Act13";
import Act14 from "./Act14";

/* Activity 1:

function App() {
  let names = ["Asa Yuri", "Mikael", "Menta"];
  return (
    <main>
      <div className="card">
        <img className="card__image" src={img1} alt="By Yuri Manei" />
        <span className="card__name">{names[0]}</span>
      </div>
      <div className="card">
        <img className="card__image" src={img2} alt="By Mika Borgia" />
        <span className="card__name">{names[1]}</span>
      </div>
      <div className="card">
        <img className="card__image" src={img3} alt="By mentatdgt" />
        <span className="card__name">{names[2]}</span>
      </div>
    </main>
  );
} */

/* Activity 2 */

/* function App() {
  let useCounter = useRef();

  function changeImage(e) {
    e.target.src.includes("yuri")
      ? (e.target.src = img2)
      : e.target.src.includes("mikael")
      ? (e.target.src = img3)
      : (e.target.src = img1);
  }
  const add1 = () => {
    useCounter.current.innerHTML++;
    if (useCounter.current.innerHTML >= 10) {
      useCounter.current.innerHTML = 1;
    }
    if (useCounter.current.innerHTML >= 8) {
      useCounter.current.style.backgroundColor = "red";
    } else {
      useCounter.current.style.backgroundColor = "transparent";
    }
  };
  const multiplyBy5 = () => {
    useCounter.current.innerHTML *= 5;
  };
  const reflectOnCounter = (e) => {
    useCounter.current.innerHTML = e.target.value;
  };
  return (
    <div className="container">
      <span className="container__counter" ref={useCounter}>
        1
      </span>
      <div>
        <button className="container__button" onClick={add1}>
          Add 1 unit
        </button>
        <button className="container__button" onClick={multiplyBy5}>
          Multiply by 5
        </button>
      </div>
      <img
        className="container__img"
        src={img1}
        alt="Nice people"
        onClick={changeImage}
      />
      <input
        className="container__imput"
        type="text"
        onChange={reflectOnCounter}
      />
    </div>
  );
} */

/* Activity 3: */

/* function App() {
  let names = ["Asa Yuri", "Mikael", "Menta"];

  const hideImage = (e) => {
    e.target.parentNode.style.backgroundColor = "transparent";
    e.target.src.includes("ok")
      ? (e.target.style.visibility = "hidden")
      : (e.target.src = imgOk);
  };
  const hideName = (e) => {
    if (e.target.innerHTML === "Viewed") {
      e.target.style.visibility = "hidden";
    } else {
      e.target.innerHTML = "Viewed";
    }
  };
  return (
    <main>
      <div className="card">
        <img
          className="card__image"
          src={img1}
          alt="By Yuri Manei"
          onClick={hideImage}
        />
        <span className="card__name" onClick={hideName}>
          {names[0]}
        </span>
      </div>
      <div className="card">
        <img
          className="card__image"
          src={img2}
          alt="By Mika Borgia"
          onClick={hideImage}
        />
        <span className="card__name" onClick={hideName}>
          {names[1]}
        </span>
      </div>
      <div className="card">
        <img
          className="card__image"
          src={img3}
          alt="By mentatdgt"
          onClick={hideImage}
        />
        <span className="card__name" onClick={hideName}>
          {names[2]}
        </span>
      </div>
    </main>
  );
}

export default App;
 */

/* Activity 4 */

/* 
  const App = () => {
  const nicePeople = [
    {
      name: "Asa Yuri",
      hobby: "making dev projects on her own.",
    },
    {
      name: "Mikael",
      hobby: "cooking. He loves omelette with onion.",
    },
    {
      name: "Menta",
      hobby: "practicing wrestling.",
    },
    {
      name: "Demian",
      hobby: "reading books.",
    },
  ];
  const [counter, setCounter] = useState(0);
  const [phrase, setPhrase] = useState();

  const getPhrase = () => {
    setCounter(counter + 1);
    if (counter >= nicePeople.length - 1) {
      setCounter(0);
    }
    setPhrase(
      <p>
        <span className="phrase__span--red">{nicePeople[counter].name}</span>´s
        main hobby is
        <span className="phrase__span--green">
          {" "}
          {nicePeople[counter].hobby}
        </span>
      </p>
    );
  };

  return (
    <>
      <button className="get-phrase-button" onClick={getPhrase}>
        Get a phrase
      </button>
      <div className="phrase">{phrase}</div>
    </>
  );
};
export default App; */

/* Activity 5 */

/* const App = () => {
  const currencyExchange = [
    {
      currency: "Euro",
      exchangeRate: 1,
    },
    {
      currency: "Argentine peso",
      exchangeRate: 143.26,
    },
    {
      currency: "Colombian peso",
      exchangeRate: 4.412,
    },
    {
      currency: "Mexican peso",
      exchangeRate: 20.07,
    },
    {
      currency: "Dollar",
      exchangeRate: 1.01,
    },
  ];

  const [amount, setAmount] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);
  const [resultado4, setResultado4] = useState(0);

  const exchange = (e) => {
    setAmount(e.target.value);
    setResultado1(e.target.value * currencyExchange[1].exchangeRate);
    setResultado2(e.target.value * currencyExchange[2].exchangeRate);
    setResultado3(e.target.value * currencyExchange[3].exchangeRate);
    setResultado4(e.target.value * currencyExchange[4].exchangeRate);
  };

  return (
    <div className="exchange-container">
      <div className="exchange-container__input-container">
        <label htmlFor="ex0">{currencyExchange[0].currency}</label>
        <input id="ex0" type="number" value={amount} onChange={exchange} />
      </div>

      <div className="exchange-container__input-container">
        <label htmlFor="ex1">{currencyExchange[1].currency}</label>
        <input id="ex1" type="number" value={resultado1} readOnly />
      </div>

      <div className="exchange-container__input-container">
        <label htmlFor="ex2">{currencyExchange[2].currency}</label>
        <input id="ex2" type="number" value={resultado2} readOnly />
      </div>

      <div className="exchange-container__input-container">
        <label htmlFor="ex3">{currencyExchange[3].currency}</label>
        <input id="ex3" type="number" value={resultado3} readOnly />
      </div>

      <div className="exchange-container__input-container">
        <label htmlFor="ex4">{currencyExchange[4].currency}</label>
        <input id="ex4" type="number" value={resultado4} readOnly />
      </div>
    </div>
  );
};

export default App; */

// Activity 6

/* const App = () => {
  const products = [
    {
      name: "Pro Headphones+Mic",
      imgUrl:
        "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "peru",
      price: 159.95,
    },
    {
      name: "MK Watch",
      imgUrl:
        "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "royalblue",
      price: 94,
    },
    {
      name: "Donuts",
      imgUrl:
        "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg",
      color: "crimson",
      price: 5,
    },
    {
      name: "Blue Shoes",
      imgUrl:
        "https://images.pexels.com/photos/13236694/pexels-photo-13236694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "teal",
      price: 40,
    },
    {
      name: "GoPro",
      imgUrl:
        "https://images.pexels.com/photos/11031052/pexels-photo-11031052.jpeg?cs=srgb&dl=pexels-moises-ribeiro-11031052.jpg&fm=jpg",
      color: "green",
      price: 100,
    },
    {
      name: "Laptop",
      imgUrl:
        "https://images.pexels.com/photos/4058226/pexels-photo-4058226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "darkmagenta",
      price: 400,
    },
  ];

  const [totalPay, setTotalPay] = useState(0);

  return (
    <>
      <h2 className="total-to-pay">Total to pay: {totalPay}€</h2>
      <div className="product-card__container">
        <ProductCard
          name={products[0].name}
          imgUrl={products[0].imgUrl}
          color={products[0].color}
          price={products[0].price}
          setTotalPay={setTotalPay}
        />
        <ProductCard
          name={products[1].name}
          imgUrl={products[1].imgUrl}
          color={products[1].color}
          price={products[1].price}
          setTotalPay={setTotalPay}
        />
        <ProductCard
          name={products[2].name}
          imgUrl={products[2].imgUrl}
          color={products[2].color}
          price={products[2].price}
          setTotalPay={setTotalPay}
        />
        <ProductCard
          name={products[3].name}
          imgUrl={products[3].imgUrl}
          color={products[3].color}
          price={products[3].price}
          setTotalPay={setTotalPay}
        />
        <ProductCard
          name={products[4].name}
          imgUrl={products[4].imgUrl}
          color={products[4].color}
          price={products[4].price}
          setTotalPay={setTotalPay}
        />
        <ProductCard
          name={products[5].name}
          imgUrl={products[5].imgUrl}
          color={products[5].color}
          price={products[5].price}
          setTotalPay={setTotalPay}
        />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default App; */

// Activities 7 & 8

const App = () => {
  /* const products = [
    {
      name: "Pro Headphones+Mic",
      imgUrl:
        "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 159.95,
    },
    {
      name: "MK Watch",
      imgUrl:
        "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 94,
    },
    {
      name: "Donuts",
      imgUrl:
        "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg",
      price: 5,
    },
    {
      name: "Blue Shoes",
      imgUrl:
        "https://images.pexels.com/photos/13236694/pexels-photo-13236694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 40,
    },
    {
      name: "GoPro",
      imgUrl:
        "https://images.pexels.com/photos/11031052/pexels-photo-11031052.jpeg?cs=srgb&dl=pexels-moises-ribeiro-11031052.jpg&fm=jpg",
      price: 109,
    },
    {
      name: "Laptop",
      imgUrl:
        "https://images.pexels.com/photos/4058226/pexels-photo-4058226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 400,
    },
  ]; */

  return (
    <>
      {/* <h1 id="act7__title">Activity 7</h1>
      <div className="box">
        <Act7 products={products} />
      </div> */}
      {/* <h1 id="act8__title">Activity 8: Products cheaper than 100€</h1>
      <Act8 products={products} /> */}
      {/* <h1 id="act9__title">
        Activity 9: Finds the first products who´s first letter is "b"
      </h1>
      <Act9 products={products} /> */}
      {/* <h1 id="act10__title">
        Activity 10: Filter the products who´s price is greater than 90€ and
        less than 160€. Vote the one you like most by clicking on the number
        below the product.
      </h1>
      <Act10 products={products} /> */}
      {/* <Act11 /> */}
      {/* <Act12 /> */}
      {/* <Act13 /> */}
      <Act14 />
    </>
  );
};

export default App;
