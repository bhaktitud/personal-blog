import React from 'react'
import { graphql } from 'gatsby'

class RecentPosts extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allMdx.edges
        console.log(posts.filter((post, index) => index < 5).map(post => post))

        return (
            <div>
                <ul>
                    {
                        posts.filter((post, index) => (
                        index < 5 && <li>{post.frontmatter.title}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default RecentPosts

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
            readingTime{
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            likes
            image
          }
        }
      }
    }
  }
`