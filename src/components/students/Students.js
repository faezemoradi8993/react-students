import React from "react";
import Student from "../student/Student";
import "./students.css";

const Students = ({
  onechangeName,
  onechangeGrade,
  onechangeEmail,
  clicked,
  students,
  toggle,
}) => {
  //for change display i used toggle
  if (toggle) {
    return (
      <div className="other-display-students">
        {students.map((student) => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            grade={student.grade}
            email={student.email}
            onechangeName={(event) => onechangeName(event, student.id)}
            onechangeGrade={(event) => onechangeGrade(event, student.id)}
            onechangeEmail={(event) => onechangeEmail(event, student.id)}
            clicked={clicked}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="students">
      {students.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          grade={student.grade}
          email={student.email}
          onechangeName={(event) => onechangeName(event, student.id)}
          onechangeGrade={(event) => onechangeGrade(event, student.id)}
          onechangeEmail={(event) => onechangeEmail(event, student.id)}
          clicked={clicked}
        />
      ))}
    </div>
  );
};
export default Students;
