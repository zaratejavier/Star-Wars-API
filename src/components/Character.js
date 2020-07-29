import React, { useState, } from "react";



const Character = (props) => {
  // const [editing, setEditing] = useState(false)


  return (
      <div className="Character-info" key={props.id}>
        {props.name}
        <img className='Image' src={props.image}/>
      </div>
  )
  };

export default Character