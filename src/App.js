import React, { useState } from "react";
import "./App.css";
import Students from "./components/students/Students";
import Button from "./components/layout/button/Button";
import NewStudent from "./components/newStudent/NewStudent";

function App() {
  // states
  const [studentsState, setStudents] = useState([
    { id: 0, name: "reza", grade: 20, email: "faeze.moradi8993@hmail.com" },
    { id: 1, name: "ali", grade: 19, email: "fateme.nosrati@hmail.com" },
    { id: 2, name: "mohammad", grade: 20, email: "ali.masoomi@hmail.com" },
    { id: 3, name: "hosein", grade: 18, email: "reza.raisi@hmail.com" },
  ]);
  const [toggle, setToggle] = useState(true); //for change display
  const [studentName, setStudentName] = useState(""); //for add new student
  const [studentGrade, setStudentGrade] = useState(""); //for add new student
  const [studentEmail, setStudentEmail] = useState(""); //for add new student

  // event handlers

  // changeNameHandler
  const changeNameHandler = (event, id) => {
    const index = studentsState.findIndex((p) => p.id === id);
    const newStudents = [...studentsState];
    const newData = event.target.value;
    newStudents[index].name = newData;
    setStudents(newStudents);
  };
  // changeGradeHandler
  const changeGradeHandler = (event, id) => {
    const index = studentsState.findIndex((p) => p.id === id);
    const newStudents = [...studentsState];
    const newData = event.target.value;
    newStudents[index].grade = newData;
    setStudents(newStudents);
  };

  // changeEmailHandler
  const changeEmailHandler = (event, id) => {
    const index = studentsState.findIndex((p) => p.id === id);
    const newStudents = [...studentsState];
    const newData = event.target.value;
    newStudents[index].email = newData;
    setStudents(newStudents);
  };

  // deleteStudentHandler
  const deleteStudentHandler = (id) => {
    console.log(id);
    const newStudents = [...studentsState];
    newStudents.splice(id, 1);
    setStudents(newStudents);
  };

  // change display handler (toggle)
  const toggleHandler = () => {
    console.log(toggle);
    setToggle(!toggle);
  };

  //add new student handlers
  const setNameHandler = (event) => {
    setStudentName(event.target.value);
  };
  const setGradeHandler = (event) => {
    setStudentGrade(event.target.value);
  };
  const setEmailHandler = (event) => {
    setStudentEmail(event.target.value);
  };
  const addNewStudent = () => {
    const newStudents = [...studentsState];
    newStudents.push({
      id: studentsState.length,
      name: studentName,
      grade: studentGrade,
      email: studentEmail,
    });
    setStudents(newStudents);
    setStudentName("");
    setStudentGrade("");
    setStudentEmail("");
  };

  return (
    <div className="app">
      <NewStudent
        studentName={studentName}
        studentGrade={studentGrade}
        studentEmail={studentEmail}
        setNameHandler={setNameHandler}
        setGradeHandler={setGradeHandler}
        setEmailHandler={setEmailHandler}
        addNewStudent={addNewStudent}
      />
      <Button btnType="success" clicked={toggleHandler}>
        Change Display
      </Button>
      <Students
        students={studentsState}
        onechangeName={changeNameHandler}
        onechangeGrade={changeGradeHandler}
        onechangeEmail={changeEmailHandler}
        clicked={deleteStudentHandler}
        toggle={toggle}
      />
    </div>
  );
}

export default App;
