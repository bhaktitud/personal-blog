import React from 'react'
import Typist from "react-typist"
import './top-section.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Button from './button'

export const TopSection = () => {
    return (
        <div className='Container'>
            <div className='Greeting'>
                    <h5 className='name-greetings'>
                <Typist>
                        <strong>
                            Hi! I'm Bhakti{" "}
                        </strong>
                            <span role="img" aria-label="wave emoji">
                            👋 <strong>... Welcome</strong>
                            </span>
                </Typist>
                    </h5>
                <Typist
                    startDelay={4000}
                    className="section-options"
                    cursor={{ hideWhenDone: true }}
                    >
                        <AniLink paintDrip hex="#141614"  className='link-to' to="/basicprog/">
                            Basic Programming · {' '}
                        </AniLink>
                    <Typist.Delay ms={1250} />
                        <AniLink paintDrip hex="#141614"  className='link-to' to="/frontend">
                            Front End Development · {' '}
                        </AniLink>
                    <Typist.Delay ms={1250} />
                        <AniLink paintDrip hex="#141614"  className='link-to' to="/backend/">
                            Back End Deve<Typist.Delay ms={500} />lopnemt
                    <Typist.Backspace count={5} delay={1000} />
                    <Typist.Delay ms={750} />
                        pment
                        </AniLink>
                    <Typist.Delay ms={1250} />
                </Typist>
            </div>
            <div>
                <AniLink paintDrip hex="#141614" style={{boxShadow: 'none', textDecoration: 'none'}} to="/blog/">
                    <Button>
                    <Typist startDelay={2000} cursor={{ hideWhenDone: true }}>
                        Read Articles
                    </Typist>
                    </Button>
                </AniLink>
            </div>
        </div>
    )
}
