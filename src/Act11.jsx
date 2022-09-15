import React, { useEffect, useState } from "react";
import "./App.css";

const Act11 = () => {
  const [chuckJoke, setChuckJoke] = useState("");
  const getJoke = () => {
    const url = "http://api.icndb.com/jokes/random";
    const request = fetch(url);
    request
      .then((data) => data.json())
      .then((newData) => setChuckJoke(newData.value.joke))
      .catch(console.error);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="joke-container">
      <div className="joke">{chuckJoke}</div>
      <button onClick={getJoke}>Nice! Another one, please!</button>
    </div>
  );
};

export default Act11;
