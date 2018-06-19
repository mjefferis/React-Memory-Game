import React from 'react';
import './Card.css';

function handleClick(props) {
	props.rearrangeCards();
	props.clickedCard(props.id);
}

const Card = (props) => (
    <div className="row">
      <a className="thumbnail" onClick={() => handleClick(props)}>
        <img alt={props.name} src={props.image} />
      </a>
 </div>
)



export default Card