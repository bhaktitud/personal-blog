import React from 'react'
import { Link } from 'gatsby'

import { scale } from "../utils/typography"
import styled from 'styled-components'

function Navigation() {

    const NavText = styled.p`
    &:hover{
        transform: scale(1.1);
        transition: 0.1s;
      }
    `

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light rounded border sticky-top shadow">
            <div className="mx-auto order-0" 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
            <div className='d-flex flex-row align-items-center justify-content-center'>
                <img src={require(`../assets/codejam.png`)} width='105rem' style={{marginRight: '5%', marginTop: '3%'}} />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
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
                            <Link style={{textDecoration: 'inherit', color: 'inherit', boxShadow: 'none', fontFamily: 'Black Ops One', textShadow: '0px 2px 5px #051937'}} className="mx-auto" to="/">BhaktiDev</Link>
                        </h3>
                    <small style={{marginLeft: '2%'}}>"Code for your life!"</small>
                    </div>
                </div>
            </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigationCollection">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="navbar-collapse collapse w-100 order-3" id='navigationCollection'>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link style={{boxShadow: 'none'}} className="nav-link" to="/blog/"><NavText>Articles</NavText></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{boxShadow: 'none'}} className="nav-link" to="/about/"><NavText>About</NavText></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{boxShadow: 'none'}} className="nav-link" to="/contact/"><NavText>Contact</NavText></Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}


export default Navigation