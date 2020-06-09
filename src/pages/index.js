import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import GitHubButton from 'react-github-btn'
import BasicProg from '../components/basic-prog'
import BackEnd from "../components/back-end"
import FrontEnd from "../components/front-end"
import { Helmet } from "react-helmet"
import styled from "styled-components"


const IconConnect = styled.img`
    &:hover{
        transform: scale(1.1);
        transition: 0.1s;
      }
    `

class IndexPage extends React.Component {
  render() {
    const siteTitle = "BhaktiDev"

    const toLinkedIn = () => {
      window.open('https://www.linkedin.com/in/bhaktibudimannovanda', '_blank');
    }

    const toFacebook = () => {
      window.open('https://www.facebook.com/bhakti.fg', '_blank');
    }

    const toTwitter = () => {
      window.open('https://www.twitter.com/BhaktiNMF', '_blank');
    }


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `tutorial`]}
        />
        <div
          style={{
            display: `flex`,
            flexDirection: 'column',
            alignItems: `center`,
            marginTop: '2%'
          }}
        >
          <div
          className='shadow-lg'
            style={{
              width: '100%',
              backgroundColor: 'hsl(195.69, 46.76%, 40.25%)',
              borderRadius: 20,
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              padding: 20,
            }}
          >
            <div
            >
              <h1
                style={{ color: 'white' }}
              >
                Hi! I'm Bhakti{" "}
                <span role="img" aria-label="wave emoji">
                  👋
                </span>
              </h1>
              <IntroString>
                I am a <strong>Software Developer</strong>, currently love to write and share my knowledge to the open world!
                I welcome You to my Personal Blog, mostly my articles contain tutorials, walkthrough and conceptual knowledge about Javascript Programming.
              </IntroString>
              <div
                style={{
                  display: `flex`,
                  flexDirection: "row",
                  alignItems: `center`,
                  justifyContent: `space-between`
                }}
              >
                <GitHubButton href="https://github.com/bhaktitud" data-show-count="true" aria-label="Follow @bhaktitud on GitHub">Follow @bhaktitud</GitHubButton>
                <div
                >
                  <Link style={{boxShadow: 'none', textDecoration: 'none'}}>
                    <IconConnect src="https://img.icons8.com/ios-glyphs/32/000000/linkedin.png" alt='linkedin' onClick={() => toLinkedIn()} />
                  </Link>
                  <Link style={{boxShadow: 'none', textDecoration: 'none'}}>
                    <IconConnect src="https://img.icons8.com/ios-glyphs/32/000000/facebook.png" alt='facebook' onClick={() => toFacebook()} />
                  </Link>
                  <Link style={{boxShadow: 'none', textDecoration: 'none'}}>
                    <IconConnect src="https://img.icons8.com/ios-glyphs/32/000000/twitter.png" alt='twitter' onClick={() => toTwitter()} />
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{
                display: `flex`,
                flexDirection: "column",
                alignItems: `center`,
              }}
            >
            {/* <p>connect</p> */}
              
            </div>
          </div>
        </div>
        <Link style={{boxShadow: 'none', textDecoration: 'none'}} to="/blog/">
          <Button marginTop="35px">Read Articles</Button>
        </Link>
        <hr />
        <div
          style={{
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* <Helmet>
            <script type="text/javascript" src="//uprimp.com/slider.php?section=General&pub=727262&ga=g&side=random"></script>
          </Helmet> */}
          <BasicProg />
          <BackEnd />
          <FrontEnd />
        </div>
      </Layout>
    )
  }
}

const IntroString = styled.p`
  font-family: 'Acme', sans-serif;
  color: white
`


export default IndexPage


