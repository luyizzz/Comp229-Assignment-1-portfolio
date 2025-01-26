import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export default function Layout() {
 return (
 <>
 <h1>My Portfolio</h1>
 <nav>

<Link to="/"><img src={logo} alt="logo" width="50" height="50" /></Link> 
<Link to="/">Home</Link> | <Link to="/about">About</Link> |
<Link to="/education">Education</Link>| <Link
to="/project">Project</Link>| <Link to="/service">Service</Link>| <Link to="/contact">Contact</Link>
 </nav>
 <br/>
 <hr />

 </>

 );
 }