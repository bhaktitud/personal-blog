import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from "../utils/typography"

function Navigation() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <div className="mx-auto order-0" 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: rhythm(1.5),
                    }}
                >
                    <h3
                        style={{
                            ...scale(1),
                            marginTop: 0,
                            marginBottom: 0,
                            width: '150%'
                        }}
                    >   
                        <Link style={{textDecoration: 'inherit', color: 'inherit', boxShadow: 'none'}} className="mx-auto" to="/">CodeJam</Link>
                    </h3>
                    <small style={{marginLeft: '2%'}}>"Code for your life!"</small>
                </div>
            </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigationCollection">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="navbar-collapse collapse w-100 order-3" id='navigationCollection'>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link style={{boxShadow: 'none'}} className="nav-link" to="/blog/">Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{boxShadow: 'none'}} className="nav-link" to="/about/">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{boxShadow: 'none'}} className="nav-link" to="/contact/">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}


export default Navigation