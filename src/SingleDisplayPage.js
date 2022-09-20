import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";

const SingleDisplayPage = ({ rgb, index, weight }) => {
  const [alert, setAlert] = useState(false);

  const rgbColor = rgb.join(",");
  const rgbColors = `rgb(${rgbColor})`;
  console.log(index);

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(rgbColors);
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [alert]);

  return (
    <div
      onClick={handleClick}
      className={`rgbcolors ${index > 10 && "colors-bright"}`}
      style={{ backgroundColor: rgbColors }}
    >
      <h5>{rgbColors}</h5>
      <span>{weight}%</span>
      {alert && <Alert className="alert" severity="success">rgb copied!</Alert>}
    </div>
  );
};

export default SingleDisplayPage;
