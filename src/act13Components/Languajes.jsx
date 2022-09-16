import React, { useContext } from "react";
import "../App.css";
import Context from "../context/Context";

function Languajes() {
  const { student, setStudent } = useContext(Context);
  const replacement = (position) => {
    setStudent(
      student.map((data, index) =>
        index === 3 ? { ...data, language: position } : { ...data }
      )
    );
  };

  const changeLang1 = () => {
    replacement(0);
  };
  const changeLang2 = () => {
    replacement(1);
  };
  const changeLang3 = () => {
    replacement(2);
  };

  return (
    <div className="languages">
      <img
        onClick={changeLang1}
        className="flag"
        src="../images/uk.png"
        alt="The United Kingdom´s Flag"
      />
      <img
        onClick={changeLang2}
        className="flag"
        src="../images/spain.jpg"
        alt="Spain´s Flag"
      />
      <img
        onClick={changeLang3}
        className="flag"
        src="../images/france.png"
        alt="France´s Flag"
      />
    </div>
  );
}

export default Languajes;
