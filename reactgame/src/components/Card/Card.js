import React from 'react';
import './Card.css';

function handleClick(props) {
	props.rearrangeCards();
	props.clickedCard(props.id);
}

const Card = (props) => (
    <div className="row">
    <div className="col-md-3">
      <a className="thumbnail" onClick={() => handleClick(props)}>
        <img alt={props.name} src={props.image} />
      </a>
    </div>
  </div>
)



export default Card