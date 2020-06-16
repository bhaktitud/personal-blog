import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from '../components/bio'
import Tags from '../components/tags'
import { rhythm } from "../utils/typography"
import styled from "styled-components"


const PostCard = styled.div`
&:hover{
  box-shadow: 0 2px 2px 2px rgba(0,0,0,0.1);
  transform: scale(1.02);
  transition: box-shadow 0.1s ease-in-out;
  }

`

class BasicProgramming extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const author = data.site.siteMetadata.author
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Basic Programming Posts" />
        <div
          style={{
            marginTop: '5%'
          }}
        >
          <Bio />
        </div>
        <hr />
        <div style={{ marginTop: '5%' }}>
          <h4>Basic Programming ({posts.length})</h4>
        </div>
        <div style={{ margin: "50px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const readingTime = node.fields.readingTime.text
            return (

              <Link
              style={{ boxShadow: `none`, textDecoration: `none`, color: 'inherit' }}
              to={`blog${node.fields.slug}`}
              >
              <PostCard 
                className='card' key={node.fields.slug} 
                style={{ 
                  marginBottom: 20, 
                  borderRadius: 5,
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
                <small>{node.frontmatter.date} </small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                    style={{marginTop: 5}}
                  />
                  <small>Author: <strong>{author}</strong></small>
                </div>
              </PostCard>
              </Link>
            )
          })}
        </div>
        <hr />
      </Layout>
    )
  }
}

export default BasicProgramming

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(filter: {frontmatter: {tags: {in: ["basic programming"]}}}, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              slug
              readingTime{
                text
              }
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              description
              tags
            }
          }
        }
      }
  }
`
