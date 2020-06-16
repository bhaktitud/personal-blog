import React from 'react'
import Tags from './tags'
import { Link } from 'gatsby'


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
                <Link 
                  style={{
                    boxShadow: 'none',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  to='/basicprog/'
                >
                  Basic Programming
                </Link>
              </Tags>
            </li>
            <li className="h6"
              style={{
                marginRight: 5
              }}
            >
              <Tags>
                <Link 
                  style={{
                    boxShadow: 'none',
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                  to='/backend/'
                >
                  Back-End
                </Link>
              </Tags>
            </li>
            <li className="h6"
              style={{
                marginRight: 5
              }}
            >
              <Tags>
                <Link 
                  style={{
                    boxShadow: 'none',
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                  to='/frontend/'
                >
                  Front-End
                </Link>
              </Tags>
            </li>
          </ul>
    )
}

export default Sidenav