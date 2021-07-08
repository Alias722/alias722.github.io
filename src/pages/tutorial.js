import React, {useEffect, useState} from 'react'

export default function Tutorial(props) {
    const [title,setTitle] = useState('title')
    const [subtitle,setSubtitle] = useState('subtitle')
    const [sectionTitle,setSectionTitle] = useState('section')
    const [sectionBody,setSectionBody] = useState('body')

    async function getData(){
        const url = `${process.env.REACT_APP_API_ENDPOINT}tutorial/${props.match.params.course}/${props.match.params.lesson}.json`
        const data = await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json'
            }
        })
        const json = await data.json()
        setTitle(json['title'])
        setSectionBody(json['detail'])
        setSubtitle(json['context'])
        setSectionTitle('Begin')
    }

    useEffect(()=>{
        getData()
        // eslint-disable-next-line
    },[])

    return (
        <>
            <header id="header">
                <h1><a href="/">Tutorials</a></h1>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>

            <section id="wrapper">
                <header>
                    <div className="inner">
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                </header>

                <div className="wrapper">
                    <div className="inner">
                        <section>
                            <h3 className="major">{sectionTitle}</h3>
                            <p>{sectionBody}</p>

                        </section>
                    </div>
                </div>

            </section>
        </>
    )
}