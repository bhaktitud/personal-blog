import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { TopSection } from "../components/top-section"
import { Parallax } from "react-parallax"


class IndexPage extends React.Component {
  render() {
    const siteTitle = "BhaktiDev"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `tutorial`]}
        />
        <MainContainer>
        <Parallax
            blur={5}
            bgImage={require('../assets/Scattered-Forcefields.svg')}
            strength={-300}
        >
            <TopSection />
        </Parallax>
        </MainContainer>
      </Layout>
    )
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default IndexPage
