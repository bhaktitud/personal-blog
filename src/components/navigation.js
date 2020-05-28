import React from 'react'
import { Link } from 'gatsby'

function Navigation() {
    return (
        <ul
        style={{
            display: 'flex',
            flexDirection: 'row'
        }}
        >
            <li style={{textDecoration: 'none', listStyle:'none', marginRight: 5}}>
                <Link to='/'>
                Home
                </Link>
            </li>
            <li style={{textDecoration: 'none', listStyle:'none', marginRight: 5}}>
                <Link to='/blog/'>
                Articles
                </Link>
            </li>
            <li style={{textDecoration: 'none', listStyle:'none', marginRight: 5}}>
                <Link to='/about'>
                About
                </Link>
            </li>
            <li style={{textDecoration: 'none', listStyle:'none', marginRight: 5}}>
                <Link to='/contact'>
                Contact
                </Link>
            </li>
        </ul>

    )
}


export default Navigation