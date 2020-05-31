import React from 'react'

import { graphql } from "gatsby"
import Layout from "../components/layout"

class About extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        return(
            <Layout location={this.props.location} title={siteTitle}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: '2%'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: `center`,
                      flexDirection: 'column',
                      width: `100%`
                    }}
                  >
                      <h3><strong>Reach Out!</strong></h3>
                      <hr />
                      <form
                          name="contact"
                          method="POST"
                          action="https://getform.io/f/52bb6a9d-2079-4bcf-b748-28752ed3a795" 
                          style={{
                              display: 'flex',
                              flexDirection: 'column',
                          }}
                      >

                          <label for="fname">First Name</label>
                          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                          
                          <label for="email">Email</label>
                          <input type="email" id="email" name="email" placeholder="Your email address.." />

                          <label for="subject">Subject / Question</label>
                          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

                          <button className="btn btn-primary" type="submit" style={{marginTop: 5}}>Submit</button>
                      </form>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: `center`,
                      flexDirection: 'column',
                      width: '100%'
                    }}
                  >
                    <h3><strong>Newsletter</strong></h3>
                    <hr />
                    <iframe src="https://bhakti3c0.substack.com/embed" height="320" frameborder="0" scrolling="no"></iframe>
                  </div>      
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