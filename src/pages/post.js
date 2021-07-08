import React from 'react'

export default function Post(props){
    return(
        <h1>Posts: {props.match.params.id}</h1>
    )
}