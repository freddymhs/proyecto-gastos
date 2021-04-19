import React from 'react';
import PropTypes from 'prop-types';

/* functions */
function getOnlyKeys(somearraylist) {
  const res = Object.keys(somearraylist[0]);
  const noid = res.filter((e) => e !== 'id');
  return noid;
}

/* main component */
function Index(props) {
  const { caption, ivalues } = props;
  const keys = getOnlyKeys(ivalues);
  return (
    <table>
      <caption />
      <thead>
        <tr>
          {keys.map((v) => (
            <td>{v}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {ivalues.map((v) => (
          <tr key={v.id}>
            <td>{v.category}</td>
            <td>{v.name}</td>
            <td>{v.date}</td>
            <td>{v.prority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Index.propTypes = {
  caption: PropTypes.string,
  ivalues: PropTypes.arrayOf(PropTypes.any),

};
Index.defaultProps = {
  caption: 'titulo',
  ivalues: [
    {
      id: 1, category: 'ropa', name: 'blabla', date: '200-10201-2', prority: '10',
    },
    {
      id: 2, category: 'salud', name: 'blabla', date: '200-10201-2', prority: '10',
    },
    {
      id: 3, category: 'viaje', name: 'blabla', date: '200-10201-2', prority: '10',
    },
    {
      id: 4, category: 'subscription', name: 'blabla', date: '200-10201-2', prority: '10',
    },
    {
      id: 5, category: 'vicios', name: 'blabla', date: '200-10201-2', prority: '10',
    },
    {
      id: 6, category: 'comida', name: 'blabla', date: '200-10201-2', prority: '10',
    },
    {
      id: 7, category: 'regalos', name: 'blabla', date: '200-10201-2', prority: '10',
    },
  ],
};

export default Index;
