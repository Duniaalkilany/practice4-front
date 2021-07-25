import React, { Component } from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand style={{color:'white',paddingTop:'10px'}}> 
    <img src={'https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-24/256/Psychonauts-1-icon.png'} style={{width:100,height:100,marginLeft:-120}}/>
    Psychonauts APP
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to ='/' style={{padding:'0 15px',textDecoration:'none'}} >Home</Link>
        <Link to ='/favourite'style={{padding:'0 15px',textDecoration:'none'}} >Favourite</Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}

export default Header
