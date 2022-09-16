import React, { useContext, useState } from "react";
import "../App.css";
import Context from "../context/Context";
import Location from "./Location";
import Professor from "./Professor";

function Info() {
  const { student } = useContext(Context);
  /* console.log(student); */
  const language = student[3].language;
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const show1 = () => {
    setHide1(!hide1);
    setHide2(true);
  };
  const show2 = () => {
    setHide2(!hide2);
    setHide1(true);
  };

  return (
    <div>
      <h1>{student[language].title}</h1>
      <p>{student[language].text}</p>
      <div className="buttons">
        <button onClick={show1}>{student[language].button1}</button>
        <button onClick={show2}>{student[language].button2}</button>
      </div>
      {hide1 ? "" : <Professor />}
      {hide2 ? "" : <Location />}
    </div>
  );
}

export default Info;
