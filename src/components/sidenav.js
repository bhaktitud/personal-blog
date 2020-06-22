import React from 'react'
import Tags from './tags'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const Sidenav = () => {
    return (
            <ul
            style={{
              textDecoration: 'none',
              listStyleType: 'none',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <li className="h6"
              style={{
                marginRight: 5
              }}
            >
              <Tags>
                <AniLink
                fade 
                  style={{
                    boxShadow: 'none',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  to='/basicprog/'
                >
                  Basic Programming
                </AniLink>
              </Tags>
            </li>
            <li className="h6"
              style={{
                marginRight: 5
              }}
            >
              <Tags>
                <AniLink
                fade 
                  style={{
                    boxShadow: 'none',
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                  to='/backend/'
                >
                  Back-End
                </AniLink>
              </Tags>
            </li>
            <li className="h6"
              style={{
                marginRight: 5
              }}
            >
              <Tags>
                <AniLink
                fade 
                  style={{
                    boxShadow: 'none',
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                  to='/frontend/'
                >
                  Front-End
                </AniLink>
              </Tags>
            </li>
          </ul>
    )
}

export default Sidenav