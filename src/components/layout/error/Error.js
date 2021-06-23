import React from "react";
import "./error.css";



const Error = (props) => {
  let classes = ["error"];
  switch (props.errorType) {
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
    <p className={classes.join(" ")} onClick={props.clicked}>
      {props.children}
    </p>
  );
};

export default Error;
