import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Banner from '../component/banner'
import Spotlight1 from "../component/spotlight1";
import Spotlight2 from "../component/spotlight2";
//import Spotlight3 from "../component/spotlight3";

import Focus from "../component/focussection"

export default function Home() {
    const [nothing, setNothing] = useState("nothing")
    const focusTitle = "collection";
    const focusContext = "descriptions";
    useEffect(() => {
        setNothing(nothing)
    }, [nothing])
    return (
        <React.Fragment>
            <Banner title={"I am Milliax"} context={"oh I don' t know what to say \n below are some of my projects"}/>
            <section id={"wrapper"}>
                <Spotlight1 link={"/project"} title={"projects"} context={"these are my projects"}
                            picture="https://raw.sivir.pw/public/images/pic01.jpg"/>
                <Spotlight2 link={"/tutorial"} title={"tutorials"}
                            context={"During my self-studying time.\nI realized that if someone writes a tutorial in advance, then we can learn things more efficient and correct."}
                            picture="https://raw.sivir.pw/public/images/pic02.jpg"/>
                <section className="wrapper alt style1">
                    <div className="inner">
                        <h2 className="major">{focusTitle}</h2>
                        <p>{focusContext}</p>
                        <section className="features">
                            <Focus picture="https://raw.sivir.pw/public/images/pic05.jpg" title={"電動窗簾"}
                                   context={"利用Raspberry Pi、Google Home、IFTTT串接的自動窗簾"} link={"https://sivir.pw"}/>
                        </section>
                        <ul className="actions">
                            <li><Link to="/posts" className="button">Browse All</Link></li>
                        </ul>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}