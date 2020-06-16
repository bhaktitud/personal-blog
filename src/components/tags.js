import React from "react"

const Tags = ({ children }) => (
    <span
        className='badge badge-primary'
        style={{
            borderRadius: 5,
            padding: 5,
            marginLeft: 2
        }}
    >{children}</span>   
)

export default Tags
