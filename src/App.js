import React, { useState } from 'react';
import './App.css';
import Students from './components/students/Students'

function App() {
  const [studentsState, setStudents] = useState([
    { id: 1, name: "reza", grade: 20, email: "faeze.moradi8993@hmail.com" },
    { id: 2, name: "ali", grade: 19, email: "fateme.nosrati@hmail.com" },
    { id: 3, name: "mohammad", grade: 20, email: "ali.masoomi@hmail.com" },
    { id: 4, name: "hosein", grade: 18, email: "reza.raisi@hmail.com" }
  ]);
  const changeNameHandler = (event, id) => {
    const index = studentsState.findIndex(p => p.id === id);
    const newStudents = [...studentsState];
    const newData = event.target.value;
    newStudents[index].name = newData;
    setStudents(newStudents);

  }
  const changeGradeHandler = (event, id) => {
    const index = studentsState.findIndex(p => p.id === id);
    const newStudents = [...studentsState];
    const newData = event.target.value;
    newStudents[index].grade = newData;
    setStudents(newStudents);

  }
  const changeEmailHandler = (event, id) => {
    const index = studentsState.findIndex(p => p.id === id);
    const newStudents = [...studentsState];
    const newData = event.target.value;
    newStudents[index].email = newData;
    setStudents(newStudents);

  }
  const deleteStudentHandler = (index) => {
    const newStudents = [...studentsState];
    newStudents.splice(index, 1);
    setStudents(newStudents);

  }

  return (
    <div className="app">
      <Students
        students={studentsState}
        onechangeName={changeNameHandler}
        onechangeGrade={changeGradeHandler}
        onechangeEmail={changeEmailHandler}
        ondeleteStudent={deleteStudentHandler} />
      {console.log(studentsState)}
    </div>
  );
}

export default App;

