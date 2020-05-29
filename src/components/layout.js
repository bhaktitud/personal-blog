import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Navigation from './navigation'

class Layout extends React.Component {
  
  toGatsby = () => {
    window.open('https://www.gatsbyjs.org', '_blank');
  }
  
  toGithub =() => {
    window.open('https://www.github.com/bhaktitud', '_blank');
  }

  toNetlify = () => {
    window.open('https://www.netlify.com', '_blank');
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    // if (location.pathname === rootPath || location.pathname === blogPath) {
    //   header = (
    //     <div
    //       style={{
    //         display: 'flex',
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         justifyContent: 'space-between'
    //       }}
    //     >
    //       <h1
    //         style={{
    //           ...scale(1.5),
    //           marginBottom: rhythm(1.5),
    //           marginTop: 0,
    //         }}
    //       >
    //         <Link
    //           style={{
    //             boxShadow: `none`,
    //             textDecoration: `none`,
    //             color: `inherit`,
    //           }}
    //           to={location.pathname === blogPath ? `/blog/` : `/`}
    //         >
    //           {title}
    //           <h6
    //             style={{
    //               marginTop: 0,
    //               paddingLeft: 10
    //             }}
    //           >"Code for your life!"</h6>
    //         </Link>
    //       </h1>
    //       <Navigation />
    //     </div>
    //   )
    // } else {
    //   header = (
    //     <div
    //       style={{
    //         display: 'flex',
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         justifyContent: 'space-between'
    //       }}
    //     >
    //       <h3
    //         style={{
    //           fontFamily: `Montserrat, sans-serif`,
    //           marginTop: 0,
    //         }}
    //       >
    //         <Link
    //           style={{
    //             boxShadow: `none`,
    //             textDecoration: `none`,
    //             color: `inherit`,
    //           }}
    //           to={location.pathname === blogPath ? `/` : `/blog/`}
    //         >
    //           {title}
    //         </Link>
    //       </h3>
    //       <Navigation />
    //     </div>
    //   )
    // }


    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Navigation />
          {/* <header>{header}</header> */}
          <main>{children}</main>
        </div>
          <Footer
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p>Powered by:</p>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                <img style={{marginRight: 5}} title="Built with Gatsby" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/logo-gatsby-icon.png?alt=media&token=bb166c75-0d2f-4eb5-aa4e-1ff209a21bc1" alt="gatsby" width="32" onClick={this.toGatsby}></img>
                <img style={{marginRight: 5}} title="Open Source on Github" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/icons8-github-64.png?alt=media&token=2d42a276-f5b1-4ed2-b62b-97282a2376bf-github-64.png" alt="github" width="32" onClick={this.toGithub}></img>
                <img style={{marginRight: 5}} title="Hosted with Netlify" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/netlify-logo-png-transparent.png?alt=media&token=dbd3de58-cd40-48d9-80e2-0e2320e0c9d9-logo-png-transparent.png" alt="netlify" width="32" onClick={this.toNetlify}></img>
            </div>
          </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
