import React, { useState, useEffect } from 'react';
import { studentsData } from "../Data/Data";
import "./StudentDetails.css"

const StudentDetails = ({match}) => {
  const [studentDetail ,setStudentDetail] =useState({});
  useEffect(() => {
    getData();
  }, [])
  const getData=()=>{
    
    const dataObject= studentsData.filter(s => s.id === match.params.id);
    console.log(dataObject);
    setStudentDetail(dataObject);
  }
  return (
    <div className="studentDetials">
        <div className="Detials">
      <h1>{match.params.id}</h1>
      <h2>{studentsData[0].name}</h2>
      <h2>{studentsData[0].grade}</h2>
      <h2>{studentsData[0].email}</h2>
      </div>
    </div>
  );
};

export default StudentDetails;
