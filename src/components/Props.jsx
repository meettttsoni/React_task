import { useState } from 'react';

const Props = (props) => {
    const{list,user}=props;
  
  return (
    <div>
      <h1>{props.message}</h1>
      <ul>
        {
          props.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        }
      </ul>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>City:{user.city}</p>
    </div>
  );
};

export default Props;
