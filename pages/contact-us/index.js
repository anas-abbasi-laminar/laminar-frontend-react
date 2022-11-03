import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>

        {/* Hero Section */}
        <div id="hero">
            <div id="hero-styles">

                <div id="hero-caption" className="content-max-width parallax-scroll-caption block-title">
                    <div className="inner">
                        <div className="hero-arrow"><i className="arrow-icon"></i></div>
                        <h5 className="hero-subtitle"><span>Contact Us</span></h5>
                        <div className="hero-title-wrapper"><h1 className="hero-title"><span>Hello</span><span>World</span></h1></div>
                    </div>
                </div>    

            </div>
        </div>                      
        {/* /Hero Section */}

        {/* Main Content */}
        <div id="main-content">

            {/* Main Page Content */}
            <div id="main-page-content" className="content-max-width">

                {/* Row */}
                <div className="content-row row_padding_top row_padding_bottom light-section change-header-color" data-bgcolor="#fff">
                    
                    <h6 className="has-icon">Let&apos;s Talk</h6>
                    
                    <hr /><br />
                    
                    <h1 className="has-mask-fill no-margins">Get</h1>
                    <h1 className="has-mask-fill">In Touch</h1>
                    
                    <hr /><br />

                    <div id="contact-laminar">
                    
                        <div id="message"></div>
                    
                        <form method="post" action="https://submit-form.com/6jLW1fqZ" name="contactform" id="contactform">                             
                            <div className="name-box has-animation" data-delay="100">        
                                <input name="name" type="text" id="name" size="30" placeholder="What's Your Name" required="required" /><label className="input_label"></label>
                            </div>                                                        
                            <div className="email-box has-animation" data-delay="150">
                                <input name="email" type="email" id="email" size="30" placeholder="Your Email" required="required" /><label className="input_label"></label>
                            </div>                            
                            <div className="message-box has-animation" data-delay="100">
                                <textarea name="message" cols="40" rows="4" id="message" placeholder="How Can We Help?" required="required"></textarea><label className="input_label slow"></label>
                            </div>                          
                            <div className="button-box has-animation" data-delay="100">             
                                <div className="clapat-button-wrap parallax-wrap">
                                    <div className="clapat-button parallax-element">
                                        <div className="button-border outline parallax-element-second">
                                            <input type="submit" className="send_message" id="submit" value="Submit" />
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </form>                        
                                                
                    </div>
                    
                </div> 
                {/* /Row */}

                {/* Row */}
                <div className="content-row light-section change-header-color" data-bgcolor="#fff">
                    
                    <h6 className="has-icon">Write In</h6>
                    
                    <hr /><br />
                    
                    <h1><a href="mailto:sales@lamin.ar" className="link">sales@lamin.ar</a></h1>

                </div>
                {/* /Row */}

                {/* Row */}
                <div className="content-row row_padding_top row_padding_bottom light-section change-header-color" data-bgcolor="#fff">
                
                    <div className="one_third has-animation"  data-delay="100">
                        
                        <div className="box-icon-wrapper block-boxes">
                            <div className="box-icon-content">
                                <h5 className="no-margins">HQ</h5>
                                <p>
                                    Laminar Global Limited<br />
                                    71-75 Shelton Street<br />
                                    Covent Garden, London<br />
                                    <strong>United Kingdom</strong>
                                </p>
                            </div>
                        </div> 
                                                
                    </div>
                    
                    <div className="one_third has-animation"  data-delay="200">
                        
                        <div className="box-icon-wrapper block-boxes">
                            <div className="box-icon-content">
                                <h5 className="no-margins">Dev Centre</h5>
                                <p>
                                    Laminar Global Poland Sp. z o.o.<br />
                                    św. Mikołaja 8-11<br />
                                    50-125 Wrocław<br />
                                    <strong>Poland</strong>
                                </p>
                            </div>
                        </div>
                                                
                    </div>
                    
                    <div className="one_third last has-animation"  data-delay="300">
                        
                        <div className="box-icon-wrapper block-boxes">
                            <div className="box-icon-content">
                                <h5 className="no-margins">AMEA Sales</h5>
                                <p>
                                    Laminar MediaTech DIFC<br/>
                                    Level 7, Gate Village<br/>
                                    Building 10, DIFC<br/>
                                    <strong>Dubai</strong>
                                </p>
                            </div>
                        </div>
                        
                    </div> 
                                            
                </div> 
                {/* /Row */}

            </div>
            {/* /Main Page Content */}

            {/* Page Navigation */}
            <div id="page-nav">
                <div className="page-nav-wrap">
                    <div className="page-nav-caption content-max-width block-title marquee-title">
                        <div className="inner">
                            <div className="hero-arrow"><i className="arrow-icon"></i></div>
                            <div className="next-hero-subtitle"><span>Try It Out</span></div>
                            <a className="page-title" data-type="" data-firstline="Out" data-secondline="Link" href="https://form.typeform.com/to/I4TZbZgk" target="_blank" rel="noreferrer">
                                <div className="next-hero-title-wrapper"><div className="next-hero-title"><span>Request Free Access -</span></div></div>
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