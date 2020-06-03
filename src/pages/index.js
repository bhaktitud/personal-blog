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
            marginTop: '10%'
          }}
        >
  
          <div
            style={{
              width: '100%',
              backgroundColor: 'rgba(155, 155, 155, 0.5)',
              borderRadius: 25,
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              padding: 20
            }}
          >
            
            <div
            >
              <h1>
                Hi! I'm Bhakti{" "}
                <span role="img" aria-label="wave emoji">
                  👋
                </span>
              </h1>
              <p>
                I am a <strong>Software Developer</strong>, currently love to write and share my knowledge to the open world!
                I welcome You to my Personal Blog, mostly my articles contain tutorials, walkthrough and conceptual knowledge about Javascript Programming.
              </p>
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
                    <img src="https://img.icons8.com/ios-glyphs/32/000000/linkedin.png" alt='linkedin' onClick={() => toLinkedIn()} />
                  </Link>
                  <Link style={{boxShadow: 'none', textDecoration: 'none'}}>
                    <img src="https://img.icons8.com/ios-glyphs/32/000000/facebook.png" alt='facebook' onClick={() => toFacebook()} />
                  </Link>
                  <Link style={{boxShadow: 'none', textDecoration: 'none'}}>
                    <img src="https://img.icons8.com/ios-glyphs/32/000000/twitter.png" alt='twitter' onClick={() => toTwitter()} />
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
          <Helmet>
            <script type="text/javascript" src="//uprimp.com/slider.php?section=General&pub=727262&ga=g&side=random"></script>
          </Helmet>
          <BasicProg />
          <BackEnd />
          <FrontEnd />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
