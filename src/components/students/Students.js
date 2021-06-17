
import React from 'react'
import Student from '../student/Student'
import "./students.css"


const Students = ({ onechangeName, onechangeGrade, onechangeEmail, ondeleteStudent, students }) => {
    return (
        <div className="students">
            {students.map(student =>
                <Student
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    grade={student.grade}
                    email={student.email}
                    onechangeName={(event) => onechangeName(event, student.id)}
                    onechangeGrade={(event) => onechangeGrade(event, student.id)}
                    onechangeEmail={(event) => onechangeEmail(event, student.id)}
                    ondeleteStudent={ondeleteStudent}
                />)}
        </div>

    )
}
export default Students
