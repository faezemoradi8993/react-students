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
  studentVisible,
    onShowDetails,
}) => {
  //for change display i used toggle
  if (toggle) {
    return (
      <div className="other-display-students">
        {students.slice(0,studentVisible).map((student,index) => (
          <Student
            key={index}
            id={student.id}
            name={student.name}
            grade={student.grade}
            email={student.email}
            onechangeName={(event) => onechangeName(event, student.id)}
            onechangeGrade={(event) => onechangeGrade(event, student.id)}
            onechangeEmail={(event) => onechangeEmail(event, student.id)}
            clicked={() => clicked(index ,student.name )}
            onShowDetails={()=>onShowDetails(student)}
         
          />
        ))}
      </div>
    );
  }
  return (
    <div className="students">
      {students.slice(0,studentVisible).map((student,index) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          grade={student.grade}
          email={student.email}
          onechangeName={(event) => onechangeName(event, student.id)}
          onechangeGrade={(event) => onechangeGrade(event, student.id)}
          onechangeEmail={(event) => onechangeEmail(event, student.id)}
          clicked={() => clicked(index ,student.name )}
        />
      ))}
    </div>
  );
};
export default Students;
