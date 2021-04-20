import React from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.css';
import { Link } from 'react-router-dom';

function Index(props) {
  const { text, typet, press } = props;
  console.log(press)
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
    case 'psmall':
      return (
        <p onClick={press} className={`${styles.psmall} `}        >{text}</p>
      );

    default:
      return (
        <p >{text}</p>
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
