import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SlideFormInput from './SlideFormInput';
import SlideButton from './SlideButton';

// This is a wrapper for google.script.run that lets us use promises.
import server from '../../utils/server';

const { serverFunctions } = server;

const SlideEditor = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    // Call a server global function here and handle the response with .then() and .catch()
    serverFunctions
      .getSlidesData()
      .then(setNames)
      .catch(alert);
  }, []);

  const deleteSlide = slideIndex => {
    serverFunctions
      .deleteSlide(slideIndex)
      .then(setNames)
      .catch(alert);
  };

  const setActiveSlide = slideName => {
    serverFunctions
      .setActiveSlide(slideName)
      .then(setNames)
      .catch(alert);
  };

  // You can also use async/await notation for server calls with our server wrapper.
  // (This does the same thing as .then().catch() in the above handlers.)
  const submitNewSlide = async newSlideName => {
    try {
      const response = await serverFunctions.addSlide(newSlideName);
      setNames(response);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    }
  };

  return (
    <div>
      <p>
        <b>☀️ React demo! ☀️</b>
      </p>
      <p>
        Slide Editor
      </p>
      <SlideFormInput submitNewSlide={submitNewSlide} />
      <TransitionGroup className="sheet-list">
        {names.length > 0 &&
          names.map(name => (
            <CSSTransition
              classNames="sheetNames"
              timeout={500}
              key={name.name}
            >
              <SlideButton
                slideDetails={name}
                deleteSlide={deleteSlide}
                setActivedSlide={setActiveSlide}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

export default SlideEditor;
