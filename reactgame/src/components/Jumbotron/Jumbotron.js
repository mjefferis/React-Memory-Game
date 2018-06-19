import React from 'react';
import './Jumbotron.css';

const Jumbotron = (props) => (
<div className="jumbotron">
  <h1>Simpsons React Memory Game!</h1>
  <p>Pick a new image everytime. </p>
  <p>Score: {props.score} <span> High Score: {props.highScore} </span></p>
</div>
)

export default Jumbotron;
