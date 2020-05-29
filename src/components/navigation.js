import React from 'react'
import { Navbar, NavDropdown, Form, Button, Nav, FormControl } from 'react-bootstrap'
import { Link } from 'gatsby'

import { rhythm, scale } from "../utils/typography"

function Navigation() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <div className="mx-auto order-0">
                <h3
                    style={{
                        ...scale(1),
                        marginBottom: rhythm(1.5),
                        marginTop: 0,
                        width: '150%'
                    }}
                >   
                    <Link style={{textDecoration: 'inherit', color: 'inherit', boxShadow: 'none'}} className="mx-auto" to="/">CodeJam</Link>
                </h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link style={{boxShadow: 'none'}} className="nav-link" to="/blog/">Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{boxShadow: 'none'}} className="nav-link" to="/about/">About</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}


export default Navigation