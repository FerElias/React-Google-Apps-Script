import React from 'react';
import PropTypes from 'prop-types';

const SlideButton = ({ slideDetails, deleteSlide, setActiveSlide }) => {
  const { index, name, isActive } = slideDetails;

  return (
    <div className="sheetLine">

      <button className="basicButton" onClick={() => setActiveSlide(name)}>

      </button>
    </div>
  );
};

export default SlideButton;

SlideButton.propTypes = {
  slideDetails: PropTypes.shape({
    index: PropTypes.number,
    name: PropTypes.string,
    isActive: PropTypes.bool,
  }),
  deleteSlide: PropTypes.func,
  setActiveSlide: PropTypes.func,
};
