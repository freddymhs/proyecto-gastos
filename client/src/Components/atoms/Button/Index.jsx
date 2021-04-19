import React from 'react';
import PropTypes from 'prop-types';

function Index(props) {
  const { buttontext } = props;

  return (

    <button type="button">
      {buttontext}
    </button>
  );
}

Index.propTypes = {
  buttontext: PropTypes.string,
};
Index.defaultProps = {
  buttontext: 'texto-accion',
};

export default Index;
