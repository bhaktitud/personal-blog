import React from 'react'
import { Link } from 'gatsby'

function BasicProg() {
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
                <img src="https://firebasestorage.googleapis.com/v0/b/cloudstore-4cb34.appspot.com/o/hiclipart.com.png?alt=media&token=a6fc66ef-6233-4356-a91f-1d4a9f8e90f7" alt="javascript" width="50%"></img>
            </div>
            <div
                style={{marginLeft: '10%'}}
            >
                <h4>
                   <Link style={{textDecoration: 'none', color: 'inherit'}} to="/basicprog/">Basic Programming </Link>
                </h4>
                <p>All about basic programming in javascript, you will learn basic commands in javascript, Loop, Conditional, Nested-Loop, Nested-Condition and many more.</p>
                <hr />
            </div>
        </div>
    )
}

export default BasicProg