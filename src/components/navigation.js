import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

function Navigation() {
    return (
        <Nav
        justify
        style={{
            display: 'flex',
            flexDirection: 'row',
            fontSize: 15,
            border: '0.5px solid black',
            borderRadius: 5
        }}
        >
            <Nav.Item>
                <Link className='nav-link' to='/'>
                Home
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className='nav-link' to='/blog/'>
                Articles
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className='nav-link' to='/about'>
                About
                </Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Link className='nav-link' to='/contact'>
                Contact
                </Link>
            </Nav.Item> */}
        </Nav>

    )
}


export default Navigation