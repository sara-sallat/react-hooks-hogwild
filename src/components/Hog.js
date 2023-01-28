import React from "react";

export default function Hog  (props)  {
    const { name, image, hideHog } = props;
  
    const handleClick = () => {
      hideHog(name);
    };
    return (
      <div className='ui eight wide column'>
        <h2 className='ui header'>{name}</h2>
        <img src={image} alt={name} className='ui image' />
        <button onClick={handleClick}>Hide Hog</button>
      </div>
    );
  };
  
