import React from 'react'

export default function Focus(props){
    return(
        <article>
            <a href={props.link} className="image"><img src={props.picture} alt=""/></a>
            <h3 className="major">{props.title}</h3>
            <p>{props.context}</p>
            <a href={props.link} rel="noreferrer noopener"Z className="special">Learn more</a>
        </article>
    )
}