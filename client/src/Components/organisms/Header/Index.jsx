import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">auth</Link>
      </li>
      <li>
        <Link to="/home">home</Link>
      </li>
      <li>
        <Link to="/logout">logout</Link>
      </li>
    </ul>
  </nav>
);

export default Index;
