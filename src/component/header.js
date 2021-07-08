import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <React.Fragment>
            <header id="header" className="alt">
                <h1><a href="/">Home Page</a></h1>
                <nav>
                    <a href={'#menu'} onClick={()=>{window.scrollTo(0,document.body.scrollHeight)}}>Menu</a>
                </nav>
            </header>
            <nav id={"menu"}>
                <div className="inner">
                    <h2>Menu</h2>
                    <ul className="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/project">projects</Link></li>
                        <li><Link to="/tutorial">tutorials</Link></li>
                        <li><Link to="/post">posts</Link></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}