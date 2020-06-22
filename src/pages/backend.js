import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import Sidenav from "../components/sidenav"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './blog.css'


const PostCard = styled.div`
&:hover{
  box-shadow: 0 2px 2px 2px rgba(0,0,0,0.1);
  transform: scale(1.02);
  transition: box-shadow 0.1s ease-in-out;
  }

`

class BackEnd extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const author = data.site.siteMetadata.author
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Basic Programming Posts" />
        <div className='posts-list-container'>
          <div>
            <h4>Back-End Development ({posts.length})</h4>
          </div>
          {/* <div style={{marginTop: 25}}>
            <Sidenav />
          </div> */}
          <div style={{ margin: "20px 0 20px" }}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const readingTime = node.fields.readingTime.text
              return (
                <AniLink
                  fade
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
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      {
                        node.frontmatter.image ? 
                        <img style={{marginRight: 10, padding: 10, marginBottom: 0}} src={require(`../${node.frontmatter.image}`)} width='64' /> :
                        <img style={{marginRight: 10, padding: 0, marginBottom: 0}} src="https://img.icons8.com/carbon-copy/100/000000/book.png" alt="book" width='48'/>
                      }
                      <div
                        style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}
                      >
                        <h3
                          style={{
                            marginBottom: rhythm(1 / 4),
                          }}
                        >
                        <AniLink
                          fade
                          style={{ boxShadow: `none`, textDecoration: `none`, color: 'inherit' }}
                          to={`blog${node.fields.slug}`}
                        >
                            {title}
                          </AniLink>
                        </h3>
                        <div>
                          <small><strong>{node.frontmatter.date}</strong></small>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: node.frontmatter.description || node.excerpt,
                            }}
                            style={{marginTop: 5}}
                          />
                        </div>
                      </div>
                    </div>
                </PostCard>
                </AniLink>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BackEnd

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(filter: {frontmatter: {tags: {in: ["back-end"]}}}, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            excerpt(pruneLength: 130)
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
              image
            }
          }
        }
      }
  }
`
