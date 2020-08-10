import React from "react"
import { Button } from "semantic-ui-react"
import { Link } from "react-router-dom"

const Vehicle = (props) => {
  const url = new URL(props.url);
  const id = url.pathname.split('/')[3]

   return (
    <div>
        <Button
          as={Link}
          to={{pathname: `/Vehicle/${id}`}}
        >
        {props.name}
        </Button>
      </div>
  )

}

export default Vehicle