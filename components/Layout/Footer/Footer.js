import React from 'react'

export default function Footer() {
  return (
    <footer className="hidden">        	
        <div id="footer-container">  
            <div id="backtotop" className="button-wrap left">
                <div className="icon-wrap parallax-wrap">
                    <div className="button-icon parallax-element">
                        <i className="fa-solid fa-angle-up"></i>
                    </div>
                </div>
                <div className="button-text sticky left"><span data-hover="Back Top">Back Top</span></div> 
            </div>
            <div className="footer-middle">
                <div className="copyright">2022 © Laminar Global. All rights reserved.</div>
            </div>
            <div className="socials-wrap">            	
                <div className="socials-icon"><i className="fa-solid fa-share-nodes"></i></div>
                <div className="socials-text">Follow Us</div>
                <ul className="socials">
                    <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.linkedin.com/company/laminar-global/" target="_blank" rel="noreferrer">Li</a></span></li>
                    <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.twitter.com/LaminarGlobal/" target="_blank" rel="noreferrer">Tw</a></span></li>
                    <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.instagram.com/LaminarGlobal/" target="_blank" rel="noreferrer">In</a></span></li>
                    <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.youtube.com/channel/UCC8myUPURxBI3AeRmb9j54g/" target="_blank" rel="noreferrer">Yt</a></span></li>
                </ul>                
            </div>
        </div>
    </footer>
  )
}
