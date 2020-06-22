import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

export const ConnectList = () => {
    const toLinkedIn = () => {
        window.open('https://www.linkedin.com/in/bhaktibudimannovanda', '_blank');
    }

    const toFacebook = () => {
        window.open('https://www.facebook.com/bhakti.fg', '_blank');
    }

    const toTwitter = () => {
        window.open('https://www.twitter.com/BhaktiNMF', '_blank');
    }

    return (
        <div>
            <Link style={{boxShadow: 'none', textDecoration: 'none'}}>
                <IconConnect src="https://img.icons8.com/ios-glyphs/32/000000/linkedin.png" alt='linkedin' onClick={() => toLinkedIn()} />
            </Link>
            <Link style={{boxShadow: 'none', textDecoration: 'none'}}>
                <IconConnect src="https://img.icons8.com/ios-glyphs/32/000000/facebook.png" alt='facebook' onClick={() => toFacebook()} />
            </Link>
            <Link style={{boxShadow: 'none', textDecoration: 'none'}}>
                <IconConnect src="https://img.icons8.com/ios-glyphs/32/000000/twitter.png" alt='twitter' onClick={() => toTwitter()} />
            </Link>
        </div>
    )
}

const IconConnect = styled.img`
    &:hover{
        transform: scale(1.1);
        transition: 0.1s;
      }
    `
