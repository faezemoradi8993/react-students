import React from 'react'
import "./Student.css"

const Student = ({ id, name, grade, email, onechangeName, onechangeGrade, onechangeEmail, ondeleteStudent }) => {
    return (
        <div className="student">
            <h1>student  {id}</h1>
            <label> name </label>
            <input type="text" value={name} onChange={(event) => onechangeName(event)} />
            <label> grade </label>
            <input type="number" value={grade} onChange={(event) => onechangeGrade(event)} />
            <label> email </label>
            <input type="email" value={email} onChange={(event) => onechangeEmail(event)} />
            <label className="deleteStudent" onClick={ondeleteStudent}> delete </label>
        </div>
    )
}

export default Student
