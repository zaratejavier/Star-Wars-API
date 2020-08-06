import React from "react"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
import "./Character.css"


const Navbar = () => (
  <div>
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
       <Link to="/Planets">
      <Menu.Item>
        Planets
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About
      </Menu.Item>
      </Link>
    <Link to="/Vehicles">
      <Menu.Item>
        Vehicles
      </Menu.Item>
    </Link>
    </Menu>
   
  </div>
)

export default Navbar