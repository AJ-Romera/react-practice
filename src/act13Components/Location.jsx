import React, { useContext } from "react";
import Context from "../context/Context";

function Location() {
  const { student } = useContext(Context);
  const language = student[3].language;

  return (
    <div className="location-container">
      <h2>{student[language].button2}:</h2>
      <div>{student[language].address}</div>
    </div>
  );
}

export default Location;
