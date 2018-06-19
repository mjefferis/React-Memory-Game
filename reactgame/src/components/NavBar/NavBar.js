import React from 'react';
import './NavBar.css';

const NavBar = (props) => (
<ul className="nav nav-tabs nav-justified">
<li>Click Game</li>
<li>Click an Image to begin!</li>
<li>Score:{props.score} <span> High Score:{props.highScore} </span></li>
</ul>
)

export default NavBar;
