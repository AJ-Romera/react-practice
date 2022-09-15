import React, { useEffect, useState } from "react";
import "./App.css";

const Act11 = () => {
  const [chuckJoke, setChuckJoke] = useState([]);

  useEffect(() => {
    const url = "http://api.icndb.com/jokes";
    const request = fetch(url);
    request
      .then((data) => data.json())
      .then((newData) =>
        newData.value.map((joke) =>
          setChuckJoke((e) => [
            ...e,
            <div className="joke-box" key={joke.id}>
              {joke.id}. {joke.joke}
            </div>,
          ])
        )
      )
      .catch(console.error);
  }, []);
  // * Important: It is rendering twice because react strict mode is on. (It renders twice in development not in production). It can be disabled by deleting the React.Strictmode tagsat index.js

  return <>{chuckJoke}</>;
};

export default Act11;
