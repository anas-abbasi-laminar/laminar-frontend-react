import React from 'react';
import Preloader from './Preloader/Preloader';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';

export default function Layout({children}) {
  return (
    <>
        <main>
            <Preloader />
            <div className="cd-index cd-main-content">
                <div id="page-content" className="light-content" data-bgcolor="#171717">
                    <Header />
                    <div id="content-scroll">
                        <div id="main">
                            {children}
                        </div>
                        <Footer /> 
                    </div>
                    <div className="thumb-wrapper">
                        <div className="thumb-container">
                            <div className="thumb-page" data-src="images/01hero.jpg"></div>
                            <div className="thumb-page" data-src="images/02hero.jpg"></div>
                            <div className="thumb-page" data-src="images/03hero.jpg"></div>
                            <div className="thumb-page" data-src="images/04hero.jpg"></div>
                            <div className="thumb-page" data-src="images/05hero.jpg"></div>
                            <div className="thumb-page" data-src="images/06hero.jpg"></div>
                        </div>
                    </div>
                    <div id="app"></div>
                </div>
            </div>
        </main>
        <div className="cd-cover-layer"></div>
        <div id="magic-cursor">
            <div id="ball">
                <div id="ball-drag-x"></div>
                <div id="ball-drag-y"></div>
                <div id="ball-loader"></div>
            </div>
        </div>
        <div id="clone-image">
            <div className="hero-translate"></div>
        </div>
        <div id="rotate-device"></div>
    </>
  )
}