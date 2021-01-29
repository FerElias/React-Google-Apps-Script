import React, { useState, useEffect } from 'react';
import './Abous.css'
import SlideEditor from './SlideEditor'
import Button from '@material-ui/core/Button';
import server from '../../utils/server';



const { serverFunctions } = server;




const About = () => {

  const [slides, setSlide] = useState([]);


  const openDialog = () => {
    serverFunctions
      .openDialog()
      .then(setSlide)
      .catch(alert);
  };

  return (

    <div>
      <nav className="header"><h1>React App</h1></nav>

      <h1>React App</h1>

      <Button style={{

        backgroundColor: "#1378f3",

      }}
        onClick={openDialog} >Create New Lesson</Button>
      <h2>Hello react</h2>


    </div>

  )

}



export default About;
