import React,{useState,useEffect} from 'react'

import Focus from "../component/focussection";

export default function ListTutorial(props) {
    const [focusData,setFocusData] = useState([])
    const fetchfocusData = async ()=>{
        const url = process.env.REACT_APP_API_ENDPOINT + 'tutorial/list.json'
        const data = await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json'
            }
        })
        const json = await data.json()
        console.log(json)
        setFocusData(json)
    }
    useEffect(()=>{
        fetchfocusData()
    },[])
    return (
        <React.Fragment>
            <header id="header">
                <h1><a href="/">Home Page</a></h1>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <section id="wrapper">
                <header>
                    <div className="inner">
                        <h2>Tutorials</h2>
                        <p>During my self-studying time.
                            I realized that if someone writes a tutorial in advance, then we can learn things more efficient and correct.</p>
                    </div>
                </header>

                <div className="wrapper">
                    <div className="inner">
                        <section className="features">
                            {focusData.map(data=>{
                                return(
                                    <Focus picture={"images/pic04.jpg"}
                                           title={data.title}
                                           context={data.context}
                                           request={`tutorial/${data.link}`} />
                                )
                            })}

                        </section>

                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}