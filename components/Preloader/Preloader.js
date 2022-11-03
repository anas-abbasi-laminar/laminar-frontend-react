import React from 'react'

export default function Preloader() {
  return (
    <div className="preloader-wrap" data-firstline="Stay" data-secondline="Relaxed">
        <div className="outer">
            <div className="inner">                    
                <div className="trackbar">
                    <ul className="preloader-intro">
                        <li className="preloader-list">world&apos;s</li>
                        <li className="preloader-list">most</li>
                        <li className="preloader-list">advanced</li>
                        <li className="preloader-list">video</li>
                        <li className="preloader-list">streaming</li>
                        <li className="preloader-list">paas</li>
                    </ul>
                    <div className="loadbar"></div>
                </div>
                <div className="percentage-wrapper"><div className="percentage" id="precent"></div></div>
                <div className="percentage-intro">Please Wait</div>                     
            </div>
        </div>
    </div>
  )
}