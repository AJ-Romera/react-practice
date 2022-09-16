import React, { useContext } from "react";
import Context from "../context/Context";

function Professor() {
  const { student } = useContext(Context);
  const language = student[3].language;
  const profImage = `../images/${student[language].photo}`;

  return (
    <div className="professor-container">
      <h2>{student[language].button1}:</h2>
      <img src={profImage} alt="Proffesor´s clean and upfront face smiling" />
      <p>{student[language].name}</p>
    </div>
  );
}

export default Professor;
