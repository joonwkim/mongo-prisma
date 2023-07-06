'use client'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (<>
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">
                        {'AmiAiLab '}
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/features">Features</Nav.Link>
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                            <Nav.Link href="/me" className='disabled'>Disabled</Nav.Link>
                        </Nav>

                        <Nav className="ms-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register"> Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
       
    </>


    )
}

export default Header