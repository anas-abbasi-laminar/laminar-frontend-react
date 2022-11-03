import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fullscreen-menu invert-header" data-menucolor="#000000">
        <div id="header-container">
            <div id="logo" className="hide-ball">
                <Link className="ajax-link" data-type="page-transition" href="/">
                    <img className="black-logo" src="images/logo-black-full.svg" alt="Laminar Global Logo" />
                    <img className="white-logo" src="images/logo-white-full.svg" alt="Laminar Global Logo" />
                </Link>
            </div>
            <nav>
                <div className="nav-height">
                    <div className="outer">
                        <div className="inner">
                            <ul data-breakpoint="1025" className="flexnav">
                                {/* <li className="link menu-timeline">
                                    <a className="ajax-link" data-type="page-transition" href=""><div className="before-span"><span data-hover="Features">Features</span></div></a>
                                </li>
                                <li className="link menu-timeline">
                                    <a className="ajax-link" data-type="page-transition" href=""><div className="before-span"><span data-hover="Pricing">Pricing</span></div></a>
                                </li>
                                <li className="link menu-timeline">
                                    <a className="ajax-link" data-type="page-transition" href=""><div className="before-span"><span data-hover="About">About</span></div></a>
                                </li>
                                <li className="link menu-timeline">
                                    <a className="ajax-link" data-type="page-transition" href=""><div className="before-span"><span data-hover="Flow">Flow</span></div></a>
                                </li>
                                <li className="link menu-timeline">
                                    <a className="ajax-link" data-type="page-transition" href=""><div className="before-span"><span data-hover="Blog">Blog</span></div></a>
                                </li> */}
                                <li className="link menu-timeline">
                                    <a className="ajax-link" data-type="page-transition" href="contact-us"><div className="before-span"><span data-hover="Contact Us">Contact Us</span></div></a>
                                </li>
                            </ul>            
                        </div>
                    </div> 
                </div>          
            </nav>
            <div className="button-wrap right menu burger-lines">
                <div className="icon-wrap parallax-wrap">
                    <div className="button-icon parallax-element">
                        <div id="burger-wrapper">
                            <div id="menu-burger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-text sticky right"><span data-hover="Menu">Menu</span></div> 
            </div>    
        </div>
    </header>
  )
}
