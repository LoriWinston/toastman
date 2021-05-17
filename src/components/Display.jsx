import React from 'react';
import PropTypes from 'prop-types';

const Display = (array) => {
  return (
    <>
      {JSON.stringify(array)}
    </>
  );
};

Display.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Display;
