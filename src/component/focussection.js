import React from 'react'
import ShowAllOptions from "../component/showalloptions";


export default function Focus(props) {
    if(props.link === undefined){
        return(
            <article>
                <div className="image"><img src={props.picture} alt=""/></div>
                <h3 className="major">{props.title}</h3>
                <p>{props.context}</p>
                <ShowAllOptions request={props.request}/>
            </article>
        )
    }else{
        return(
            <article>
                <a href={props.link} className="image"><img src={props.picture} alt=""/></a>
                <h3 className="major">{props.title}</h3>
                <p>{props.context}</p>
                <a href={props.link} rel="noreferrer noopener" Z className="special">Learn more</a>
            </article>
        )
    }
}