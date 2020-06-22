import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { scale } from "../utils/typography"
import styled from 'styled-components'

function Navigation() {

    return (
        <nav className="navbar navbar-expand-md bg-white navbar-light sticky-top">
            <div className="mx-auto order-0" 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
            <div className='d-flex flex-row align-items-center justify-content-center'>
                <img src={require(`../assets/codejam.png`)} width='100' style={{marginRight: '5%', marginTop: '7%'}} />
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
                            <AniLink paintDrip hex="#141614" style={{textDecoration: 'inherit', color: 'inherit', boxShadow: 'none', fontFamily: 'Black Ops One'}} className="mx-auto" to="/">BhaktiDev</AniLink>
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
                        <AniLink paintDrip hex="#141614" style={{boxShadow: 'none'}} className="nav-link" to="/blog/">
                            <NavText className='btn btn-outline-info'>Articles</NavText>
                        </AniLink>
                    </li>
                    <li className="nav-item">
                        <AniLink paintDrip hex="#141614" style={{boxShadow: 'none'}} className="nav-link" to="/about/">
                            <NavText className='btn btn-outline-info'>About</NavText>
                        </AniLink>
                    </li>
                    <li className="nav-item">
                        <AniLink paintDrip hex="#141614" style={{boxShadow: 'none'}} className="nav-link" to="/contact/">
                            <NavText className='btn btn-outline-info'>Contact</NavText>
                        </AniLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}


const NavText = styled.p`
:hover{
    transform: scale(1.1);
    transition: 0.1s;
  }
`

export default Navigation