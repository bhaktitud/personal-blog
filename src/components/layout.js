import React from "react"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Navigation from './navigation'
import { Helmet } from "react-helmet"


const IconConnect = styled.img`
    &:hover{
        transform: scale(1.1);
        transition: 0.1s;
      }
    `

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

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(28),
            padding: `${rhythm(1.5)} ${rhythm(1 / 4)}`
          }}
        >
          <Helmet>
            <script data-ad-client="ca-pub-1639440201559812" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          </Helmet>
        <Navigation />
          <div
          className='bg-light border rounded shadow-lg'
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(28),
              padding: `${rhythm(0.5)} ${rhythm(4 / 3.8)}`,
              marginTop: `2%`,
            }}
          >

            <main>{children}</main>
          </div>
            <Footer
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 5,
              }}
              className="bg-light rounded border shadow-lg"
            >
              <h6>Bhakti Budiman Novanda, {new Date().getFullYear()}</h6>
              <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                  <IconConnect style={{marginRight: 5}} title="Built with Gatsby" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/logo-gatsby-icon.png?alt=media&token=bb166c75-0d2f-4eb5-aa4e-1ff209a21bc1" alt="gatsby" width="24" onClick={this.toGatsby}></IconConnect>
                  <IconConnect style={{marginRight: 5}} title="Open Source on Github" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/icons8-github-64.png?alt=media&token=2d42a276-f5b1-4ed2-b62b-97282a2376bf-github-64.png" alt="github" width="32" onClick={this.toGithub}></IconConnect>
                  <IconConnect style={{marginRight: 5}} title="Hosted with Netlify" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/netlify-logo-png-transparent.png?alt=media&token=dbd3de58-cd40-48d9-80e2-0e2320e0c9d9-logo-png-transparent.png" alt="netlify" width="24" onClick={this.toNetlify}></IconConnect>

              </div>
              <p class="has-line-data" data-line-start="0" data-line-end="1"><a href="https://app.netlify.com/sites/bhaktidev/deploys"><img src="https://api.netlify.com/api/v1/badges/b35e6d96-a7bb-4fbf-86b9-dad8fc3d4dde/deploy-status" alt="Netlify Status" /></a></p>
            </Footer>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: #FF416C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;
`

export default Layout
