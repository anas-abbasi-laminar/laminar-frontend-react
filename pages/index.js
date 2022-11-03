import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

        {/* Hero Section */}
        <div id="hero" className="has-image">
            <div id="hero-styles">

                <div id="hero-caption" className="content-max-width">
                    <div className="inner">
                        <div className="hero-arrow">
                            <i className="arrow-icon"></i>
                        </div>
                        <div className="hero-subtitle">
                            <span>The World&apos;s </span>
                            <span>Most Advanced</span>
                        </div>
                        <div className="hero-title-wrapper">
                            <div className="hero-title">
                                <span>Video </span>
                                <span>Streaming </span>
                                <span>PaaS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="hero-footer">
                    <div className="hero-footer-right">
                        <div className="button-wrap right scroll-down">
                            <div className="icon-wrap parallax-wrap">
                                <div className="button-icon parallax-element">
                                    <i className="fa fa-angle-down"></i>
                                </div>
                            </div>
                            <div className="button-text sticky right">
                                <span data-hover="Scroll Down">Scroll Down</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="hero-description" className="content-max-width">
                    <div className="inner">
                        <div className="one_half"></div>
                        <div className="one_half last">
                            <div className="hero-text">
                                <span>We enable anybody with a library of content to launch a Netflix-like service globally in a matter of weeks.<br /><br />Think of us as the Shopify for streaming.</span>
                            </div>
                            <br />
                            <div className="button-wrap right button-link large-btn has-animation">
                                <div className="icon-wrap parallax-wrap">
                                    <div className="button-icon parallax-element">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                                <a className="ajax-link" href="contact-us" data-type="page-transition">
                                    <div className="button-text sticky right">
                                        <span data-hover="Let's Talk">Let&apos;s Talk</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div id="hero-image-wrapper">
            <div id="hero-background-layer" className="parallax-scroll-image">
                <div id="hero-bg-image" style={{"backgroundImage": "url(images/02hero.jpg)"}}></div>
            </div>
        </div>
        {/* /Hero Section */}

        {/* Main Content */}
        <div id="main-content">

            {/* Main Page Content */}
            <div id="main-page-content" className="content-max-width">

                {/* Row */}
                <div className="content-row full light-section" data-bgcolor="#fff">

                    {/* Row */}
                    <div className="content-row fadeout-element row_padding_top light-section change-header-color" data-bgcolor="#fff">

                        <h6 className="has-icon">Streaming is hard</h6>
                        <hr />
                        <h1 className="has-mask-fill no-margins">But does it</h1>
                        <h1 className="has-mask-fill">have to be?</h1>
                        <hr />
                        <p className="has-animation one_half" data-delay="50">What if you had a powerful set of apps, tools & features right out of the box, which you could customise in any way you liked from an easy-to-use admin panel?</p>
                        <hr /><hr /><hr /><hr />

                    </div>
                    {/* /Row */}

                    {/* Row */}
                    <div className="content-row light-section change-header-color" data-bgcolor="#fff">
                    
                        <div className="one_third vertical-parallax"  data-startparallax="-0.1" data-endparallax="0">
                            <div className="box-icon-wrapper block-boxes">
                                <div className="box-icon">
                                    <i className="fa-solid fa-boxes-stacked"></i>
                                </div>
                                <div className="box-icon-content">
                                    <h5 className="no-margins">30+ apps, all devices</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="one_third vertical-parallax" data-startparallax="0" data-endparallax="0"></div>
                        
                        <div className="one_third last vertical-parallax" data-startparallax="-0.5" data-endparallax="0">
                            <div className="box-icon-wrapper block-boxes">
                                <div className="box-icon">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div className="box-icon-content">
                                    <h5 className="no-margins">Built-in payment agent</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                        </div>
                    
                    </div> 
                    {/* /Row */}

                    {/* Row */}
                    <div className="content-row row_padding_bottom row_padding_left row_padding_right full light-section change-header-color" data-bgcolor="#fff">
                        
                        <div className="marquee-text-wrapper">
                            <h1 className="marquee-text transparent big-title bw">The No-Compromise Platform.</h1>
                        </div>
                    
                    </div> 
                    {/* /Row */}

                    {/* Row */}
                    <div className="content-row row_padding_bottom light-section change-header-color" data-bgcolor="#fff">
                    
                        <div className="one_third vertical-parallax"  data-startparallax="-0.1" data-endparallax="-0.1">
                            <div className="box-icon-wrapper block-boxes">
                                <div className="box-icon">
                                    <i className="fa-solid fa-store"></i>
                                </div>
                                <div className="box-icon-content">
                                    <h5 className="no-margins">Marketing engine</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>                                    
                        </div>
                        
                        <div className="one_third vertical-parallax" data-startparallax="0" data-endparallax="0"></div>
                        
                        <div className="one_third last vertical-parallax" data-startparallax="-0.5" data-endparallax="-0.1">
                            <div className="box-icon-wrapper block-boxes">
                                <div className="box-icon">
                                    <i className="fa-solid fa-window-maximize"></i>
                                </div>
                                <div className="box-icon-content">
                                    <h5 className="no-margins">AI powered CMS</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                        </div>
                    
                    </div> 
                    {/* /Row */}

                    {/* Row */}
                    <div className="content-row row_padding_bottom row_padding_left row_padding_right full light-section change-header-color" data-bgcolor="#fff">
                        
                        <div className="marquee-text-wrapper">
                            <h1 className="marquee-text transparent big-title bw">The No-Compromise Platform.</h1>
                        </div>
                    
                    </div>
                    {/* /Row */}

                    {/* Row */}
                    <div className="content-row row_padding_bottom light-section change-header-color" data-bgcolor="#fff">
                    
                        <div className="one_third vertical-parallax"  data-startparallax="-0.1" data-endparallax="-0.2">
                            <div className="box-icon-wrapper block-boxes">
                                <div className="box-icon">
                                    <i className="fa-solid fa-arrow-pointer"></i>
                                </div>
                                <div className="box-icon-content">
                                    <h5 className="no-margins">Drag & drop UI builder</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>                                    
                        </div>
                        
                        <div className="one_third vertical-parallax" data-startparallax="0" data-endparallax="0"></div>
                        
                        <div className="one_third last vertical-parallax" data-startparallax="-0.5" data-endparallax="-0.2">
                            <div className="box-icon-wrapper block-boxes">
                                <div className="box-icon">
                                    <i className="fa-solid fa-receipt"></i>
                                </div>
                                <div className="box-icon-content">
                                    <h5 className="no-margins">Global tax management</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                        </div>
                    
                    </div> 
                    {/* /Row */}

                    {/* Row */}
                    <div className="content-row fadeout-element row_padding_bottom light-section change-header-color" data-bgcolor="#fff">

                        <hr />

                        <div className="one_half">
                        <p className="has-animation" data-delay="50">...the list just goes on, and on, and on.<br />The bottom line is, everything is already built and completely customisable.</p>
                            <h4 className="has-mask-fill">Still Not Convinced?</h4>
                            
                            {/* <hr /> */}
                            
                            <div className="button-wrap right button-link large-btn has-animation">
                                <div className="icon-wrap parallax-wrap">
                                    <div className="button-icon parallax-element">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                                <a className="" href="https://www.youtube.com/watch?v=fDzNSF384qk" target="_blank" data-type="" rel="noreferrer">
                                    <div className="button-text sticky right">
                                        <span data-hover="View all Works">See It In Action</span>
                                    </div>
                                </a> 
                            </div>
                        </div>
                        
                        <div className="one_half last"></div>

                    </div>
                    {/* /Row */}

                </div>
                {/* /Row */}

            </div>
            {/* Main Page Content */}

            {/* Page Navigation */}
            <div id="page-nav">
                <div className="page-nav-wrap">
                    <div className="page-nav-caption content-max-width block-title marquee-title1">
                        <div className="inner">
                            <div className="hero-arrow"><i className="arrow-icon"></i></div>
                            <div className="next-hero-subtitle"><span>Get in Touch</span></div>
                            <a className="page-title next-ajax-link-page" data-type="page-transition" data-firstline="Next" data-secondline="Page" href="contact-us">
                                <div className="next-hero-title-wrapper"><div className="next-hero-title"><span>Let&apos;s Talk</span></div></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Navigation */}

        </div>
        {/* /Main Content */}

    </div>
  )
}