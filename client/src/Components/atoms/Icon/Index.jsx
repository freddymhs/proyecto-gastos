import React from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.css';

function Index(props) {
  const { iname, size } = props;

  switch (size) {
    case 'tiny':
      return (
        <i className={`${styles.tiny} material-icons `}>
          {iname}
        </i>
      );
    case 'small':
      return (
        <i className={`${styles.small} material-icons `}>
          {iname}
        </i>
      );
    case 'medium':
      return (
        <i className={`${styles.medium} material-icons `}>
          {iname}
        </i>
      );
    case 'large':
      return (
        <i className={`${styles.large} material-icons `}>
          {iname}
        </i>
      );
    default:
      return (
        <i className={`${styles.medium} material-icons `}>
          {iname}
        </i>
      );
  }
}

Index.propTypes = {
  iname: PropTypes.string,
  size: PropTypes.string,
};
Index.defaultProps = {
  iname: 'add',
  size: 'default',
};

export default Index;
