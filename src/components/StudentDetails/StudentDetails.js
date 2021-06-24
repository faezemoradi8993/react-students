import React, { useState, useEffect } from 'react';
import { studentsData } from "../Data/Data";
import {useParams} from "react-router-dom";

const StudentDetails = () => {
    let { id } = useParams();

  const [studentDetail ,setStudentDetail] =useState({});
  useEffect(() => {
      console.log(id)
    const getData=()=>{
        const data= studentsData.filter(s => s.id === id);
        setStudentDetail(data);
      }
    getData();
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
