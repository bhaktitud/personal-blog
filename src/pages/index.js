import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "CodeJam"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `tutorial`]}
        />
        <div
          style={{
            display: `flex`,
            flexDirection: 'row',
            alignItems: `center`,
            justifyContent: `space-between`
          }}
        >
          <div>
            <h1>
              Hi! I'm Bhakti{" "}
              <span role="img" aria-label="wave emoji">
                👋
              </span>
            </h1>
            <p>
              I am a full stack developer, currently love to write and share my knowledge to the open world!
            </p>
          </div>
          <div
            style={{
              width: '70%',
              backgroundColor: 'rgba(138, 132, 226, 0.5)',
              borderRadius: 25,
              boxShadow: `2px 2px 30px 5px #aaaaaa`,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              marginLeft: 10
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: `flex`,
                justifyContent: `center`,
              }}
            >
              <img src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/images%2F12314343_10205659334662146_8175879808458816792_o.jpg?alt=media&token=fedd7231-1f8e-4490-8063-8dc4166db19c" alt="profile"
                style={{
                  borderRadius: '10%',
                  width: '50%',
                  height: '50%',
                  alignItems: 'center',
                  marginTop: 20,
                  // boxShadow: `2px 2px 5px 5px #aaaaaa`,

                }}
              />
            </div>
            <div
              style={{
                display: `flex`,
                flexDirection: "column",
                alignItems: `center`
              }}
            >
                <p>Social Media Connect</p>
              <div
                style={{
                  display: `flex`,
                  flexDirection: "row",
                  alignItems: `center`,
                  justifyContent: `center`
                }}
              >
                <a style={{textDecoration: `none`}} href="https://www.linkedin.com/in/bhaktibudimannovanda">
                  <img src="https://img.icons8.com/ios-glyphs/40/000000/linkedin.png" alt='linkedin' />
                </a>
                <a style={{textDecoration: `none`}} href="https://www.facebook.com/bhakti.fg">
                  <img src="https://img.icons8.com/ios-glyphs/40/000000/facebook.png" alt='facebook' />
                </a>
                <a style={{textDecoration: `none`}} href="https://www.twitter.com/BhaktiNMF">
                  <img src="https://img.icons8.com/ios-glyphs/40/000000/twitter.png" alt='twitter' />
                </a>
                <a style={{textDecoration: `none`}} href="https://www.github.com/bhaktitud">
                  <img src="https://img.icons8.com/ios-glyphs/40/000000/github.png" alt='github' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Link to="/blog/">
          <Button marginTop="35px">Read Articles</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
