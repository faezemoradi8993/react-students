import React from "react";
import "./button.css";

const Button = (props) => {
  let classes = ["button"];
  switch (props.btnType) {
    case "danger":
      classes.push("danger");
      break;
    case "success":
      classes.push("success");
      break;
    case "primery":
      classes.push("primery");
      break;
    default:
      break;
  }

  return (
    <button className={classes.join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
