import React from 'react'

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

class About extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        return(
            <Layout location={this.props.location} title={siteTitle}>
                {/* <div
                    style={{ 
                        margin: "20px 0 40px",
                    }}
                > */}
                        {/* <form
                            name="contact"
                            method="POST" 
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
                            
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email address.." />

                            <label for="country">Country</label>
                            <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                            <option value="usa">Indonesia</option>
                            </select>

                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form> */}
                        <form 
                            name="contact-user" 
                            method="POST" 
                            data-netlify="true" 
                            style={{
                                display: 'flex',
                                flexDirection: 'column' 
                            }}
                        >
                            <p>
                                <label>Your Name: <input type="text" name="name" /></label>   
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email" /></label>
                            </p>
                            <p>
                                <label>Your Role: <select name="role[]" multiple>
                                <option value="leader">Leader</option>
                                <option value="follower">Follower</option>
                                </select></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <p>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </p>
                        </form>
                {/* </div> */}
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