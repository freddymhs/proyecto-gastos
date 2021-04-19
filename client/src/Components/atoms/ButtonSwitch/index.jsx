import React from 'react';
import PropTypes from 'prop-types';

function Index(props) {
  const { id } = props;

  return (

    <label className="switch" htmlFor={id}>

      <input type="checkbox" id={id} />
      {/* <span className="slider">{id}</span> */}
    </label>
  );
}

Index.propTypes = {
  id: PropTypes.string,
};
Index.defaultProps = {
  id: 'REQUERIDO',
};

export default Index;
