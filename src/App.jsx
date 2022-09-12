/* import React, { useRef } from "react"; */
import React, { useState } from "react";
import "./App.css";
/* import img1 from "./assets/images/asa-yuri.jpg";
import img2 from "./assets/images/mikael.jpg";
import img3 from "./assets/images/menta.jpg";
import imgOk from "./assets/images/ok.jpg"; */

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

const App = () => {
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

export default App;
