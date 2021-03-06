import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Students from "./components/students/Students";
import Button from "./components/layout/button/Button";
import NewStudent from "./components/newStudent/NewStudent";
import { studentsData } from "./components/Data/Data";
import StudentDetails from "./components/StudentDetails/StudentDetails"
import axios from "axios";


function App() {
  const history = useHistory();

  // states
  const [studentsState, setStudents] = useState([]);
  //for change display
  const [toggle, setToggle] = useState(true);
  //for add new student
  const [studentName, setStudentName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentVisible, setStudentVisible] = useState(15);

  //get data from data component
  useEffect(() => {
    request();
    setStudents(studentsData);
  }, []);
  const request = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/posts").then(res => console.log(res)).catch(err => console.error(err));
  }


  // changeNameHandler
  const changeNameHandler = (event, id) => {
    const index = studentsState.findIndex((p) => p.id === id);
    const newStudents = [...studentsState];
    const newData = event.target.value;
    newStudents[index].name = newData;
    studentsData[index].name = newData;
    setStudents(newStudents);
  };
  // changeGradeHandler
  const changeGradeHandler = (event, id) => {
    const index = studentsState.findIndex((p) => p.id === id);
    const newStudents = [...studentsState];
    const newData = event.target.value;
    newStudents[index].grade = newData;
    studentsData[index].grade = newData;
    setStudents(newStudents);
  };

  // changeEmailHandler
  const changeEmailHandler = (event, id) => {
    const index = studentsState.findIndex((p) => p.id === id);
    const newStudents = [...studentsState];
    const newData = event.target.value;
    newStudents[index].email = newData;
    studentsData[index].email = newData;
    setStudents(newStudents);
  };

  // deleteStudentHandler
  const deleteStudentHandler = (index, name) => {
    console.log(name);
    const newStudents = [...studentsState];
    newStudents.splice(index, 1);
    studentsData.splice(index, 1);
    setStudents(newStudents);
    toast(`${name}???? ???????????? ?????? ????`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

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
    //check input not empty 
    if ((studentName.length === 0) || (studentEmail.length === 0) || (studentGrade.length === 0)) {
      toast("?????????????? ???? ???????? ???????? ????????", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast(`${studentName}???? ???????????? ?????????? ????`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      newStudents.push({
        //id is max of studentsState's id + 1
        id: Math.max.apply(Math, [...studentsState].map(i => i.id)) + 1,
        name: studentName,
        grade: studentGrade,
        email: studentEmail,
      });
      setStudents(newStudents);
      studentsData.push({
        //id is max of studentsState's id + 1
        id: Math.max.apply(Math, [...studentsState].map(i => i.id)) + 1,
        name: studentName,
        grade: studentGrade,
        email: studentEmail,
      });
      setStudentName("");
      setStudentGrade("");
      setStudentEmail("");
    };



  };
  // onShowDetails
  const onShowDetails = (match) => {
    history.push(`/StudentDetails/${match.id}`);
  }
  //showMoreStudents
  const showMoreStudents = () => {
    setStudentVisible(prevValue => prevValue + 20)
  }

  return (

    <Switch>
      <Route path="/StudentDetails/:id" component={StudentDetails} />
      <div className="app">
        <ToastContainer />
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
          studentVisible={studentVisible}
          onShowDetails={onShowDetails}
        />
        <Button btnType="success" clicked={showMoreStudents}>
          more
        </Button>
      </div>
    </Switch>

  );
}

export default App;
