import React from "react";
const Button = () => {

  let [count, setCount] = React.useState(0);
  let [hovered, setHovered] = React.useState(false);
  const handleOnClick = () => {
    setCount(count + 1);
    console.log("Clicked");
  };
  const handleOnMouseLeave = () => {
    setHovered(false);
  };
  const handleOnMouseEnter = () => {
    console.log("Mouse Enter");
    setHovered(true);
  };
  const buttonStyle = {
    backgroundColor: hovered ? "LightYellow": "lightblue",
    padding: "10px",
  }

  return (
    <button style ={buttonStyle} onClick={handleOnClick} onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter}>Clicked {count} times</button>
  );
};

export default Button;

