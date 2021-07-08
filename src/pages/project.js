import React from 'react'

export default function Project(props){
    return(
        <h1>Projects: {props.match.params.id}</h1>
    )
}