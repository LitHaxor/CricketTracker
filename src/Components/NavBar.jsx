import React from 'react';
import { Nav,Navbar,Button } from "react-bootstrap";
function NavBar(){
        return(
            <div>
                <Navbar bg="light" variant="light">
                <Navbar.Brand href="/"><img alt="cricket logo" height="60px"  src='./assets/cricketball.svg'/>Cricket Tracker</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
               
                <Button variant="outline-primary">Login</Button>
               
            </Navbar>
            </div>
        )  
}

export default NavBar;