import React from 'react'
import { Link } from 'gatsby'

function BackEnd() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '10%'
            }}
        >
            <div>
                <h4>
                    <Link style={{textDecoration: 'none', color: 'inherit'}} to="/backend/">Back-End Dev</Link>
                </h4>
                <p>All about back-end development, primarily express.js, node, postgresql, sequelize. In this section you will need to have a good fundamental knowledge of javascript.</p>
                <hr />
            </div>
            <div
                style={{marginLeft: '10%'}}
            >
                <img src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/pngflow.com.png?alt=media&token=5da5d793-9e96-459b-8cfd-580f531f41e6" alt="node" width="50%"></img>
            </div>
        </div>
    )
}

export default BackEnd