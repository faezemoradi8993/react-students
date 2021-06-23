import React from "react";
import "./NewStudent.css";
import Button from "../layout/button/Button";
import Error from "../layout/error/Error";

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
      {studentName.length <=0 ? <Error errorType="danger">نام را وارد کنید</Error> : null}
      <label> grade </label>
      <input
        type="number"
        value={studentGrade}
        onChange={(event) => {
          setGradeHandler(event);
        }}
      />
      {studentGrade.length <=0 ?  <Error errorType="danger">نمره را وارد کنید</Error>:null}
      <label> email </label>
      <input
        type="email"
        value={studentEmail}
        onChange={(event) => {
          setEmailHandler(event);
        }}
      />
       {studentEmail.length <=0 ? <Error errorType="danger">ایمیل را وارد کنید</Error>:null}
      <Button clicked={addNewStudent} btnType="primery">
        Add
      </Button>
    </div>
  );
};

export default NewStudent;
