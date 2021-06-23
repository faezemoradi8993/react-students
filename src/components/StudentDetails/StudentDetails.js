import React, { useState, useEffect } from 'react';
import { studentsData } from "../Data/Data";

const StudentDetails = ({ match }) => {


  const [studentDetail ,setStudentDetail] =useState({});
  useEffect(() => {
   const data= studentsData.filter(s => s.id === match.id);
   setStudentDetail(data);
  }, [])
  return (
    <>
      <h1>{studentDetail.id}</h1>
      <h2>{studentDetail.name}</h2>
      <h2>{studentDetail.grade}</h2>
      <h2>{studentDetail.email}</h2>
    </>
  );
};

export default StudentDetails;
