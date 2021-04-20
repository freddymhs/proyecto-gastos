import React from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.css';


function Index(props) {
  const { dimension, source } = props;

  switch (dimension) {
    case 'mini':
      return (
        <img className={`${styles.mini} `} src={source} alt="" />
      );

    case 'mid':
      return (
        <img className={`${styles.mid} `} src={source} alt="" />
      );

    case 'big':
      return (
        <img className={`${styles.big} `} src={source} alt="" />
      );

    default:
      return (
        <img className={`${styles.mini} `} src={source} alt="" />
      );
  }
}

Index.propTypes = {
  source: PropTypes.string,
  dimension: PropTypes.string
};
Index.defaultProps = {
  source: 'sin-ruta-img',
  dimension: 'big'
};

export default Index;

