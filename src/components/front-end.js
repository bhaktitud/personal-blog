import React from 'react'
import { Link } from 'gatsby'

function FrontEnd() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '10%',
            }}
        >
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/PinClipart.com_react-clipart_3857336.png?alt=media&token=9ce6149f-6b39-4493-8a45-1b882aa41a67" alt="react" width="40%"></img>
            </div>
            <div
                style={{
                    width: '180%'
                }}
            >
                <h4>
                    <Link style={{boxShadow: 'none', textDecoration: 'none', color: 'inherit'}} to="/frontend">Front-End Dev</Link>
                </h4>
                <p>All about front-end development, you will learn how to develop client side using React.js, Redux and many more...</p>
                <hr />
            </div>
        </div>
    )
}

export default FrontEnd