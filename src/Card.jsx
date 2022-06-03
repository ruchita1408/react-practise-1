import React from 'react';

function Card(props) {
    return (
     <div className='box'>
     <div className="box1">
     <h1>{props.name}</h1>
     <img src={props.img} alt="" className='image' />
     </div>
     <div className="box2">
     <p>{props.num}</p>
     <p>{props.gmail}</p>
     </div>
     </div>
    );
  }
  export default Card;