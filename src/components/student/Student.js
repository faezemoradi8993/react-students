import React from "react";
import Button from "../layout/button/Button";
import "./Student.css";
// import { Link } from "react-router-dom";
// import { Router } from "react-router";

const Student = ({
  id,
  name,
  grade,
  email,
  onechangeName,
  onechangeGrade,
  onechangeEmail,
  clicked,
  onShowDetails,
}) => {
  return (
    <div className="student">
      <h1>student {id}</h1>
      <label> name </label>
      <input
        type="text"
        value={name}
        onChange={(event) => onechangeName(event)}
      />
      <label> grade </label>
      <input
        type="number"
        value={grade}
        onChange={(event) => onechangeGrade(event)}
      />
      <label> email </label>
      <input
        type="email"
        value={email}
        onChange={(event) => onechangeEmail(event)}
      />
      <Button clicked={clicked} btnType="danger">
        Delete
      </Button>
      {/* <Router> */}
        {/* <Link to={`/studentDetails/:${id}`}> */}
          <Button btnType="success" clicked={onShowDetails}>
            Details
          </Button>
        {/* </Link> */}
      {/* </Router> */}
    </div>
  );
};

export default Student;
