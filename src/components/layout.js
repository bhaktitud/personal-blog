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

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(28),
            padding: `${rhythm(1.5)} ${rhythm(1 / 4)}`,
          }}
        >
          <Navigation />
          <main>{children}</main>
          <Footer
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 5,
            }}
            className="bg-light rounded border"
          >
            <h6>Bhakti Budiman Novanda, {new Date().getFullYear()}</h6>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                <img style={{marginRight: 5}} title="Built with Gatsby" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/logo-gatsby-icon.png?alt=media&token=bb166c75-0d2f-4eb5-aa4e-1ff209a21bc1" alt="gatsby" width="24" onClick={this.toGatsby}></img>
                <img style={{marginRight: 5}} title="Open Source on Github" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/icons8-github-64.png?alt=media&token=2d42a276-f5b1-4ed2-b62b-97282a2376bf-github-64.png" alt="github" width="32" onClick={this.toGithub}></img>
                <img style={{marginRight: 5}} title="Hosted with Netlify" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/netlify-logo-png-transparent.png?alt=media&token=dbd3de58-cd40-48d9-80e2-0e2320e0c9d9-logo-png-transparent.png" alt="netlify" width="24" onClick={this.toNetlify}></img>
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
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
