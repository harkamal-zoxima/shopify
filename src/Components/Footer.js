import React from 'react'
import './Footer.css'
import instagram from '../Assets/instagram.png'
import linkedin from '../Assets/linkedin.png'
import twitter from '../Assets/twitter.png'
import youtube from '../Assets/youtube.png'

function Footer() {
    return (
        <div style={{backgroundColor:"#FBD1D2",textAlign:"center"}}>
        <div className="footerDiv">
            <a href="https://www.instagram.com/"><img className="socialIcon" src={instagram} alt="no img"></img></a>
            <a href="https://www.linkedin.com/feed/"><img className="socialIcon" src={linkedin} alt="no img"></img></a>
            <a href="https://twitter.com/?lang=en"><img className="socialIcon" src={twitter} alt="no img"></img></a>
            <a href="https://www.youtube.com/"><img className="socialIcon" src={youtube} alt="no img"></img></a>
        </div>
        <p style={{paddingBottom:"20px"}}>Copyright ©2020, All rights reserved</p>
        </div>
    )
}

export default Footer
