import React from 'react'
import {Link} from 'react-router-dom'

export default function Navibar(){
    const menuStyle={
        "overflow": 'visible'
    }
    return(
        <nav id="menu" style={menuStyle}>
            <div className="inner">
                <h2>Menu</h2>
                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="generic">Generic</Link></li>
                    <li><Link to="elements">Elements</Link></li>
                </ul>
                <Link className="close">Close</Link>
            </div>
        </nav>
    )
}