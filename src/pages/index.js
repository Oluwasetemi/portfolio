import { Link } from 'gatsby';
import React from 'react';

export default function Home(props) {
  return (<div>
    <h2>Welcome to website</h2>
    <Link to="/portfolio">Go to Portfolio</Link>
  </div>)
}
