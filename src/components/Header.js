import React from 'react';
import { useSelector } from 'react-redux'

const Header = props => {
  const car = useSelector(state => state.car);
  return (
    <>
      <figure className="image is-128x128">
        {/*<img src={props.car.image} alt={props.car.name} /> */}
        <img src={car.image} alt={car.name} />
      </figure>
      {/*<h2>{props.car.name}</h2>*/}
      {/*<p>Amount: ${props.car.price}</p>*/}
    
      <h2>{car.name}</h2>
      <p>Amount: {car.price}</p>
    </>
  );
};

export default Header;
