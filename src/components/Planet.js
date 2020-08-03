import React from "react"
import { Button } from "semantic-ui-react"
import { Link } from "react-router-dom"

const Planet = (props) => {
  return (
    
    // <div key={props.id}>
    //     <Button
    //       as={Link}
    //       to={{pathname: `/Planet/${props.id}`}}
    //     >
    //       {props.name}
    //     </Button>
    //   </div>

    <div>
      <p>Name: {props.name}</p>
      <p>Diameter: {props.diameter}</p>

      <p>Population: {props.population}</p>
    </div>
  )

  
}

export default Planet