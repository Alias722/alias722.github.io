import React from 'react'
import Footer from '../component/footer';
import Navibar from '../component/navibar'
import Header from '../component/header'
import Banner from '../component/banner'
import Spotlight1 from "../component/spotlight1";
import Spotlight2 from "../component/spotlight2";
import Spotlight3 from "../component/spotlight3";

import Focus from "../component/focussection"

export default function Home(){
    return(
        <React.Fragment>
            <div id="page-wrapper">
                <Header />
                <Navibar />
                <Banner />
                <section id={"wrapper"}>
                    <Spotlight1 link={"https://sivir.pw"} title={"測試1"} context={"good"} picture="images/pic01.jpg" />
                    <Spotlight2 link={"https://sivir.pw"} title={"測試2"} context={"working fine"} picture="images/pic02.jpg" />
                    <section className="wrapper alt style1">
                        <div className="inner">
                            <h2 className="major">Vitae phasellus</h2>
                            <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar
                                erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet
                                lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor
                                laoreet.</p>
                            <section className="features">
                                <Focus picture="images/pic05.jpg" />
                            </section>
                            <ul className="actions">
                                <li><a href="#" className="button">Browse All</a></li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
            <Footer />
        </React.Fragment>
    )
}