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
                    style={{ 
                        margin: "20px 0 40px",
                    }}
                >
                        <form
                            name="contact"
                            method="post" 
                            netlify-honeypot="bot-field" 
                            data-netlify="true"
                            style={{
                                display: 'flex',
                                flexDirection: 'column' 
                            }}
                        >
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                            <label for="country">Country</label>
                            <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                            <option value="usa">Indonesia</option>
                            </select>

                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

                            <button className="btn btn-primary">Submit</button>
                        </form>

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