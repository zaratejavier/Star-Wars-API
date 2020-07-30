import React, { useState, } from "react";
import CharacterView from "./CharacterView"
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./Character.css"

const Character = (props) => {
  // const [editing, setEditing] = useState(false)
  return (
      <div className="Character-info" key={props.id}>
        {/* {props.name}
      <img className='Image' src={props.image} /> */}
      <Button
        as={Link}
        to={{pathname: `/Character/${props.id}`}}
      >
        {props.name}
        <img className='Image' src={props.image} />
      </Button>
      </div>
  )
  };

export default Character
