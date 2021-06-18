import React from "react";
import "./NewStudent.css";
import Button from "../layout/button/Button";

const NewStudent = ({
  studentName,
  studentGrade,
  studentEmail,
  setNameHandler,
  setEmailHandler,
  setGradeHandler,
  addNewStudent,
}) => {
  return (
    <div className="newstudent">
      <h1>Add student</h1>
      <label> name </label>
      <input
        type="text"
        value={studentName}
        onChange={(event) => {
          setNameHandler(event);
        }}
      />
      <label> grade </label>
      <input
        type="number"
        value={studentGrade}
        onChange={(event) => {
          setGradeHandler(event);
        }}
      />
      <label> email </label>
      <input
        type="email"
        value={studentEmail}
        onChange={(event) => {
          setEmailHandler(event);
        }}
      />
      <Button clicked={addNewStudent} btnType="primery">
        Add
      </Button>
    </div>
  );
};

export default NewStudent;
