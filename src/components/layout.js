import React from "react"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Navigation from './navigation'
import { Helmet } from "react-helmet"
import Sidenav from "./sidenav"
import {Footer} from './footer'

class Layout extends React.Component {

  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <Navigation />
        <Helmet>
          <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        </Helmet>
        <MainContainer>
          <main>
            {children}
          </main>
        </MainContainer>
        <Footer />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: white;
`

const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export default Layout
