import React from 'react'

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

class About extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        return(
            <Layout location={this.props.location} title={siteTitle}>
                <div
                    style={{ margin: "50px 0 40px" }}
                >
                    <h3><strong>About Me</strong></h3>
                    <div
                        style={{
                            fontSize: 18,
                            paddingTop: 10,
                            marginBottom: 40
                        }}
                    >
                        <p>
                            I am Bhakti Budiman Novanda former structural engineer, I choose to be a programmer just to follow my passion and global tech development. 
                            This website is a good corner where I can pour out what I know and what I want to know!. 
                        </p>
                            <p>I am currently a full stack developer and tech writer wannabe.</p>
                        <p>
                            I aim to create a useful website where people can learn how to be a full stack javascript, I write tutorials, conceptual and all theory that I have learned some times back.
                            You can read my <Link to='/blog/'>articles</Link>, although it still a little I hope it will be useful, and I will continue to write consistently.
                        </p>
                    </div>
                    <div
                        style={{
                            fontSize: 18
                        }}
                    >
                        <h3>Bhakti</h3>
                        <ul
                            style={{
                                marginLeft: 35
                            }}
                        >
                            <li>Work as Web Developer (primarily React, Redux, Node, Express)</li>
                            <li>Has double degree in civil engineering and information system</li>
                            <li>Loves multiplayer online games</li>
                            <li>Can play guitar</li>
                            <li>Love Gatsby so much :)</li>
                        </ul>
                    </div>
                    <hr />
                </div>
            </Layout>
        )
    }
}

export default About


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`