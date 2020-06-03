import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from '../components/bio'
import Tags from '../components/tags'
import { rhythm } from "../utils/typography"


class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const author = data.site.siteMetadata.author
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div
          style={{
            marginTop: '5%'
          }}
        >
          <Bio />
        </div>
        <hr />
        <div style={{ marginTop: '5%' }}>
          <h4>All Posts ({posts.length})</h4>
        </div>
        <div style={{marginTop: 25}}>
          <ul
            style={{
              textDecoration: 'none',
              listStyleType: 'none',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <li className="small"
              style={{
                marginRight: 5
              }}
            >
              <Tags>
                <Link 
                  style={{
                    boxShadow: 'none',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  to='/basicprog/'
                >
                  Basic Programming
                </Link>
              </Tags>
            </li>
            <li className="small"
              style={{
                marginRight: 5
              }}
            >
              <Tags>
                <Link 
                  style={{
                    boxShadow: 'none',
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                  to='/backend/'
                >
                  Back-End
                </Link>
              </Tags>
            </li>
            <li className="small"
              style={{
                marginRight: 5
              }}
            >
              <Tags>
                <Link 
                  style={{
                    boxShadow: 'none',
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                  to='/frontend/'
                >
                  Front-End
                </Link>
              </Tags>
            </li>
          </ul>
        </div>
        <div style={{ margin: "50px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const likes = node.frontmatter.likes
            const readingTime = node.fields.readingTime.text
            return (
              <div 
                className='card' key={node.fields.slug} 
                style={{ 
                  marginBottom: 20, 
                  borderRadius: 5
                }}
              >
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <img style={{marginRight: 10, padding: 0, marginBottom: 0}} src="https://img.icons8.com/carbon-copy/100/000000/book.png" alt="book" width='48'/>
                    <Link
                      style={{ boxShadow: `none`, textDecoration: `none`, color: 'inherit' }}
                      to={`blog${node.fields.slug}`}
                    >
                      {title}
                    </Link>
                  </div>
                </h3>
                <div style={{marginLeft: 20}}>
                <small>{node.frontmatter.date} {!node.frontmatter.tags? 'no tags': node.frontmatter.tags.map((tag, index) => (
                    <Tags key={index} className='tag'>{tag}{' '}</Tags>
                ))} </small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                    style={{marginTop: 5}}
                  />
                  <small>Author: <strong>{author}</strong></small>
                  <br />
                  <small>Est: <strong>{readingTime}</strong></small>
                </div>
              </div>
            )
          })}
        </div>
        <hr />
      </Layout>
    )
  }
}

export default Blog

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
          }
        }
      }
    }
  }
`
