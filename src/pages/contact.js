import React from 'react'

import { graphql } from "gatsby"
import Layout from "../components/layout"
import './blog.css'

class About extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        return(
            <Layout location={this.props.location} title={siteTitle}>
                <div className='container'>
                      <h3><strong>Reach Me Out!</strong></h3>
                      <form
                          className='contact-form'
                          name="contact"
                          method="POST"
                          action="https://getform.io/f/52bb6a9d-2079-4bcf-b748-28752ed3a795" 
                      >

                          <label className='label-input-style' name="fname">First Name</label>
                          <input className='input-style' type="text" id="fname" name="firstname" placeholder="Your name.." />
                          
                          <label className='label-input-style' name="email">Email</label>
                          <input className='input-style' type="email" id="email" name="email" placeholder="Your email address.." />

                          <label className='label-input-style' name="subject">Subject / Question</label>
                          <textarea className='input-style' id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

                          <button className="btn btn-primary" type="submit" style={{marginTop: 5}}>Submit</button>
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