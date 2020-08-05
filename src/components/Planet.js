import React from "react"
import { Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import "./Planet.css"


const Planet = (id) => {
  return (
    
    <div key={id}>
        <Button
          as={Link}
          to={{pathname: `/Planet/${id}`}}
        >
        
        </Button>
      </div>
    
    // <div className="planet-card">
    // <p>Name: {props.name}</p>
    // </div>
  )

  
}

for (var i = 1; i <= 100; i++) {
  Planet(i)
}

export default Planet