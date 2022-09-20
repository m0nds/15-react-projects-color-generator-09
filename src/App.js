import React, { useEffect, useState } from "react";
import Values from "values.js";
import Error from "./Error";
import "./App.css";
import SingleDisplayPage from "./SingleDisplayPage";

const App = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#eeeee4").all(10));
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);

  return (
    <div className="container">
      <h1 className="heading">Hexcode Color Generator</h1>
      <div className="input">
        <input
          placeholder="#EEEEE4"
          className="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
        />
        <button className="btn" onClick={handleClick}>
          Generate
        </button>
      </div>
      <div className="error">{error && <Error />}</div>
      <div className="display-colors">
        {list.map((lists, index) => {
          return <SingleDisplayPage key={index} {...lists} index={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
