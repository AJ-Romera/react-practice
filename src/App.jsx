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

import "./App.css";

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
export default App;
