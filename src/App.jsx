import React from "react";
import "./App.css";
import img1 from "./assets/images/asa-yuri.jpg";
import img2 from "./assets/images/mikael.jpg";
import img3 from "./assets/images/menta.jpg";

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
}

export default App;
