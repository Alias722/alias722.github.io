import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer(){
    return(
        <section id="footer">
            <div className="inner">
                <h2 className="major">Get in touch</h2>
                <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce
                    tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in
                    tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
                <form method="post" action="#">
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="4"></textarea>
                        </div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message"/></li>
                    </ul>
                </form>
                <ul className="contact">
                    <li className="icon solid fa-home">
                        Untitled Inc<br/>
                        1234 Somewhere in Taiwan
                    </li>
                    <li className="icon solid fa-envelope"><Link>wei@sivir.pw</Link></li>
                    <li className="icon brands fa-twitter"><Link>twitter.com/milliacs</Link></li>
                    <li className="icon brands fa-instagram"><Link>instagram.com/unknown</Link></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Untitled Inc. All rights reserved.</li>
                    <li>Design: <Link to="http://html5up.net">HTML5 UP</Link></li>
                </ul>
            </div>
        </section>

    )
}