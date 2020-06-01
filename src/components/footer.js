import React from 'react'

function Footer() {
     const toGatsby = () => {
        window.open('https://www.gatsbyjs.org', '_blank');
      }
      
      const toGithub =() => {
        window.open('https://www.github.com/bhaktitud', '_blank');
      }
    
      const toNetlify = () => {
        window.open('https://www.netlify.com', '_blank');
      }
    return (
        <Footer
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 10
            }}
            className="bg-light rounded border"
          >
            <h6>Bhakti Budiman Novanda, {new Date().getFullYear()}</h6>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                <img style={{marginRight: 5}} title="Built with Gatsby" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/logo-gatsby-icon.png?alt=media&token=bb166c75-0d2f-4eb5-aa4e-1ff209a21bc1" alt="gatsby" width="24" onClick={toGatsby()}></img>
                <img style={{marginRight: 5}} title="Open Source on Github" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/icons8-github-64.png?alt=media&token=2d42a276-f5b1-4ed2-b62b-97282a2376bf-github-64.png" alt="github" width="32" onClick={toGithub()}></img>
                <img style={{marginRight: 5}} title="Hosted with Netlify" src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/netlify-logo-png-transparent.png?alt=media&token=dbd3de58-cd40-48d9-80e2-0e2320e0c9d9-logo-png-transparent.png" alt="netlify" width="24" onClick={toNetlify()}></img>
            </div>
        </Footer>

    )
}

// const Footer = styled.footer`
//   text-align: center;
//   margin: 24px;
// `

export default Footer