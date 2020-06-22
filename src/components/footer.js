import React from 'react'
import styled from "styled-components"
import './footer.css'
import { ConnectList } from './connectlist'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import GitHubButton from 'react-github-btn'

export const Footer = () => {

    return (

    <div class="">
        <footer class="footer-bs">
            <div class="row">
              <div class="col-md-3 footer-brand animated fadeInLeft">
                  <h2>BhaktiDev</h2>
                    <p>
                      I am a Software Developer, currently love to write and share my knowledge to the open world! I welcome You to my Personal Blog, mostly my articles contain tutorials, walkthrough and conceptual knowledge about Javascript Programming.
                    </p>
                    <p>© {new Date().getFullYear()} Bhakti Budiman Novanda, All rights reserved</p>
                </div>
              <div class="col-md-4 footer-nav animated fadeInUp">
                  <h4>Menu —</h4>
                  <div class="col-md-6">
                        <ul class="pages">
                            <li><AniLink paintDrip hex="#141614"  className='link-to' to="/basicprog/">Basic Programming</AniLink></li>
                            <li><AniLink paintDrip hex="#141614"  className='link-to' to="/backend/">Back End Development</AniLink></li>
                            <li><AniLink paintDrip hex="#141614"  className='link-to' to="/frontend">Front End Development</AniLink></li>
                            </ul>
                    </div>
                  <div class="col-md-6">
                        <ul class="list">
                            <li><AniLink paintDrip hex="#141614" to="/about/">About Me</AniLink></li>
                            <li><AniLink paintDrip hex="#141614" to="/contact/">Contact</AniLink></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
              <div class="col-md-2 footer-social animated fadeInDown">
                  <h4>Stay in touch</h4>
                      <ConnectList />
                      <GitHubButton href="https://github.com/bhaktitud" data-show-count="true" aria-label="Follow @bhaktitud on GitHub">Follow @bhaktitud</GitHubButton>
                </div>
              <div class="col-md-3 footer-ns animated fadeInRight">
                  <h4>Newsletter</h4>
                    <p>Stay updated with the latest tech news and tutorial by BhaktiDev</p>
                      <div className='SectionNewsRecent'>
                          <iframe src="https://bhakti3c0.substack.com/embed" width="320" height="320" style={{background: '#3c3d41'}} frameBorder="0" scrolling="no"></iframe>
                      </div>
                </div>
            </div>
        </footer>
    </div>
    )
}


const FooterContain = styled.footer`
  text-align: center;
  margin-top: 20px;
`

const IconConnect = styled.img`
    &:hover{
        transform: scale(1.1);
        transition: 0.1s;
      }
    `