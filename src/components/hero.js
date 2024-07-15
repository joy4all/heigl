import React from "react";

export default function Hero() {
    return (
      <>
        <div className="swiper topslider topslider-video-parallax">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <video className="topslider-video" autoPlay muted playsInline loop>
                        <source src="https://metzgerei-heigl.de/images/header-video-6bb0c24f9a.webm" type="video/webm"/>
                        <source src="https://metzgerei-heigl.de/images/header-video-a4891c2ed4.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        <div className="topslider-heading-wrapper">
            <span className="topslider-heading">Rip(PChen) in Peace  </span>
            <span className="topslider-heading">Rip(PChen) in Peace  </span>
        </div>
        </div>
      </>
    );
}