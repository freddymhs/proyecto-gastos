import React from 'react';
import PropTypes from 'prop-types';

function Index(props) {
  const { text, typet } = props;

  switch (typet) {
    case 'h1':
      return (
        <h1>{text}</h1>
      );
    case 'h2':
      return (
        <h2>{text}</h2>
      );
    case 'h3':
      return (
        <h3>{text}</h3>
      );
    case 'h4':
      return (
        <h4>{text}</h4>
      );
    case 'h5':
      return (
        <h5>{text}</h5>
      );
    case 'p':
      return (
        <p>{text}</p>
      );

    default:
      return (
        <p>{text}</p>
      );
  }
}

Index.propTypes = {
  text: PropTypes.string,
  typet: PropTypes.string,
};
Index.defaultProps = {
  text: 'texto de ejemplo',
  typet: 'p',
};

export default Index;
