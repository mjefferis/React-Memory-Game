import React from 'react';
import './Card.css';

function onClick (props) {
	props.rearrangeCards();
	props.updateScore(props.id);
}

const Card = (props) => (
    <div >
      <a className="thumbnail" onClick={() => onClick(props)}>
        <img src={props.image} />
      </a>
 </div>
)

export default Card