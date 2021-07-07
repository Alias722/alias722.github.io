import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../component/footer';
import Navibar from '../component/navibar'
import Header from '../component/header'
import Banner from '../component/banner'
import Spotlight1 from "../component/spotlight1";
import Spotlight2 from "../component/spotlight2";
//import Spotlight3 from "../component/spotlight3";

import Focus from "../component/focussection"

export default function Home(){
    const [nothing,setNothing] = useState("nothing")
    const focusTitle = "collection";
    const focusContext = "descriptions";
    useEffect(()=>{
        setNothing(nothing)
    },[nothing])
    return(
        <React.Fragment>
            <div id="page-wrapper">
                <Header />
                <Navibar />
                <Banner title={"I am Milliax"} context={"oh I don' t know what to say \n below are some of my projects"} />
                <section id={"wrapper"}>
                    <Spotlight1 link={"https://sivir.pw"} title={"測試1"} context={"good"} picture="images/pic01.jpg" />
                    <Spotlight2 link={"https://sivir.pw"} title={"測試2"} context={"working fine"} picture="images/pic02.jpg" />
                    <section className="wrapper alt style1">
                        <div className="inner">
                            <h2 className="major">{focusTitle}</h2>
                            <p>{focusContext}</p>
                            <section className="features">
                                <Focus picture="images/pic05.jpg" title={"電動窗簾"} context={"利用Raspberry Pi、Google Home、IFTTT串接的自動窗簾"} link={"https://sivir.pw"}/>
                            </section>
                            <ul className="actions">
                                <li><Link to="/posts" className="button">Browse All</Link></li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
            <Footer title={"關於我"} context={"以下是我的聯絡方式"}/>
        </React.Fragment>
    )
}