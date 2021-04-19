import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Index.module.css';

function Index(props) {
  const { ivalue, id, iname } = props;

  return (
    <label htmlFor={iname}>
      <select name={iname} id={id}>
        <option value="N/A" selected disabled hidden>N/A</option>
        {ivalue.map((v) => (
          <option value={v}>{v}</option>
        ))}
      </select>
    </label>
  );
}

export default Index;

Index.propTypes = {
  id: PropTypes.string,
  iname: PropTypes.string,
  ivalue: PropTypes.string,
};
Index.defaultProps = {
  id: 'identificador',
  iname: 'nombre',
  ivalue: ['N/A', 'STANDART', 'V2', 'CREAR NUEVO'],

};
