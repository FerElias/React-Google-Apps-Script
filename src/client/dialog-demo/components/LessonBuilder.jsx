import React, { useState, useEffect } from 'react';
import server from '../../utils/server';
import Button from '@material-ui/core/Button';



const { serverFunctions } = server;




export default function LessonBuilder() {



  const [slides, setSlide] = useState([]);



  const createShape = () => {
    serverFunctions
      .createShape()
      .then(setSlide)
      .catch(alert);
  };

  const insertChart = () => {
    serverFunctions
      .insertChart()
      .then(setSlide)
      .catch(alert);
  };

  return (
    <div>
      <h1>Lesson Builder</h1>
      <Button style={{ backgroundColor: "#1378f3", }}
        onClick={createShape} >Create New Lesson</Button>

      <h3>Create new chart</h3>

      <Button style={{ backgroundColor: "#1378f3" }}
        onClick={insertChart} >Insert Chart</Button>

    </div>
  )
}
