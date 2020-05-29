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
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                        <h2>Reach out!</h2>
                        <form
                            name="contact-user"
                            method="POST" 
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            data-netlify-recaptcha="true"
                            style={{
                                display: 'flex',
                                flexDirection: 'column' 
                            }}
                        >
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email address.." />

                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
                            
                            <div data-netlify-recaptcha="true"></div>
                            <button className="btn btn-primary" type="submit">Submit</button>
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