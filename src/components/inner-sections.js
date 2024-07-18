import React, { useEffect } from "react";
import cowImg from "../assets/images/cow.svg";
import henImg from "../assets/images/hen.svg";
import pigImg from "../assets/images/pig.svg";
import SliderImg1 from "../assets/images/slider-img1.webp";
import SliderImg2 from "../assets/images/slider-img2.webp";
import SliderImg3 from "../assets/images/slider-img3.webp";
import SliderImg4 from "../assets/images/slider-img4.webp";
import DaanImg from "../assets/images/daan-heigl-img.jpg";
import ButcherImg from "../assets/images/butcher-img.jpeg";
import InstaIcon from "../assets/images/insta-icon.svg";
import WallImg1 from "../assets/images/wall-img1.webp";
import WallImg2 from "../assets/images/wall-img2.webp";
import WallImg3 from "../assets/images/wall-img3.webp";
import WallImg4 from "../assets/images/wall-img4.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import {Navigation} from 'swiper/modules';


export default function Sections() {    
    useEffect(() => {
        AOS.init();
      }, []);
    return (
      <>
      <div className="content-wrapper">
        <div className="anchor"></div>
        <main className="content">
            <div className="cols-wrapper">
                <div className="cols cols-100">
                    <div className="col col-txt">
                        <div className="h2-like">
                            <p style={{textAlign: "center"}}>servus & hello</p>
                        </div>
                        <h1 style={{textAlign: "center"}}>Bei der Metzgerei Heigl <br/>Deinem Meatmaster im Allgäu</h1>
                        <p>&nbsp;</p>
                        <hr></hr>
                    </div>
                </div>
            </div>
            <div className="cols-wrapper customstyle-animals">
                <div className="cols cols-100">
                    <div className="col col-module_SitesComponents" data-aos="zoom-in" data-aos-duration="800">
                        <div className="wwsitescomponent ww-list">
                            <div className="wwmodule-list">
                                <ul>
                                    <li>
                                        <a href="/">
                                            <div className="wwmodule-list-pic">
                                                <img src={cowImg} alt="cowImg" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="wwmodule-list-pic">
                                                <img src={henImg} alt="henImg" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <div className="wwmodule-list-pic">
                                                <img src={pigImg} alt="pigImg" />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cols-wrapper cols-full customstyle-lesser-space-top">
                <div className="cols cols-100">
                    <div className="col col-module_UniversalData">
                        <div className="wwmodule-list wwuniversaldata-objects ww-slider swiper">
                            <div className="wwuniversaldata-preview-slogan">
                                <h2 className="wwuniversaldata-preview-slogan-title">beste Qualität</h2>
                                <h1 className="wwuniversaldata-preview-slogan-subtitle">Frisch <br/> regional <br/> heigl</h1>
                            </div>
                            <Swiper
                              slidesPerView={1}
                              spaceBetween={30}
                              loop={true}
                              navigation={true}
                              modules={[Navigation]}
                                >
                            <ul className="swiper-wrapper">
                            <SwiperSlide>
                                <li className="wwuniversaldata-objects-box">
                                    <picture><img src={SliderImg1} alt="SliderImg1" /></picture>
                                    <div className="wwuniversaldata-objects-content">
                                        <div className="wwuniversaldata-objects-heading">
                                            <span>Homemade Beef Jerky</span>
                                        </div>
                                        <div className="wwuniversaldata-objects-subheading">
                                            <span>vom Weiderind</span>
                                        </div>
                                        <div className="wwuniversaldata-objects-buttons">
                                            <a href="/" className="button-outline">Details</a>
                                            <a href="/" className="button">Alle Produkte</a>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li className="wwuniversaldata-objects-box">
                                    <picture><img src={SliderImg2} alt="SliderImg2" /></picture>
                                    <div className="wwuniversaldata-objects-content">
                                        <div className="wwuniversaldata-objects-heading">
                                            <span>Homemade Beef Jerky</span>
                                        </div>
                                        <div className="wwuniversaldata-objects-subheading">
                                            <span>vom Weiderind</span>
                                        </div>
                                        <div className="wwuniversaldata-objects-buttons">
                                            <a href="/" className="button-outline">Details</a>
                                            <a href="/" className="button">Alle Produkte</a>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li className="wwuniversaldata-objects-box">
                                    <picture><img src={SliderImg3} alt="SliderImg3" /></picture>
                                    <div className="wwuniversaldata-objects-content">
                                        <div className="wwuniversaldata-objects-heading">
                                            <span>Homemade Beef Jerky</span>
                                        </div>
                                        <div className="wwuniversaldata-objects-subheading">
                                            <span>vom Weiderind</span>
                                        </div>
                                        <div className="wwuniversaldata-objects-buttons">
                                            <a href="/" className="button-outline">Details</a>
                                            <a href="/" className="button">Alle Produkte</a>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li className="wwuniversaldata-objects-box">
                                    <picture><img src={SliderImg4} alt="SliderImg4" /></picture>
                                    <div className="wwuniversaldata-objects-content">
                                        <div className="wwuniversaldata-objects-heading">
                                            <span>Homemade Beef Jerky</span>
                                        </div>
                                        <div className="wwuniversaldata-objects-subheading">
                                            <span>vom Weiderind</span>
                                        </div>
                                        <div className="wwuniversaldata-objects-buttons">
                                            <a href="/" className="button-outline">Details</a>
                                            <a href="/" className="button">Alle Produkte</a>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            </ul>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cols-wrapper customstyle-big-text">
                <div className="cols cols-100">
                    <div className="col col-txt" data-aos="zoom-in" data-aos-duration="800">
                        <p style={{textAlign: "right"}}>Hol's dir</p>
                    </div>
                </div>
            </div>
            <div className="cols-wrapper customstyle-bigger-space-bottom">
                <div className="cols cols-33-33-33">
                    <div className="col col-txt" data-aos="zoom-in" data-aos-duration="500">
                        <h3 style={{textAlign: "center"}}>Heigls butchery</h3>
                        <p style={{textAlign: "center"}}><strong>Metzgerei Heigl</strong></p>
                        <p style={{textAlign: "center"}}>Hauptstraße 17 | D-87734 Benningen <br/>
                        Telefon +49 8331 88161</p>
                    </div>
                    <div className="col col-txt"  data-aos="zoom-in" data-aos-duration="700">
                        <h3 style={{textAlign: "center"}}>heigl on the road</h3>
                        <p style={{textAlign: "center"}}><strong>Wochenmarkt Memmingen</strong></p>
                        <p style={{textAlign: "center"}}>Dienstag: 8:00 Uhr bis 12:30 Uhr <br/>
                        Samstag: 7:00 Uhr bis 12:30 Uhr <br/><br/> <strong>Gartenbau Wager | Trunkelsberg</strong> <br/><br/> 
                        Freitag: 9:00 Uhr bis 14:00 Uhr</p>
                    </div>
                    <div className="col col-txt"  data-aos="zoom-in" data-aos-duration="900">
                        <h3 style={{textAlign: "center"}}>Fleischomaten</h3>
                        <p style={{textAlign: "center"}}><strong>24/7 Fresh Heigl-Stuff</strong></p>
                        <p style={{textAlign: "center"}}>Hauptstraße 17 | D-87734 Benningen <br/>
                        Colmarer Str. 46 | D-87700 Memmingen <br/>Bodensee Str. 40 | D-87700 Memmingen</p>
                        <p style={{textAlign: "center"}}>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div className="cols-wrapper attenstion-pls">
                <div className="cols cols-100">
                    <div className="col col-txt" data-aos="zoom-in" data-aos-duration="800">
                        <h2 style={{textAlign: "center"}}>
                            <font style={{textAlignVertical: 'inherit'}}>Attention please</font>
                        </h2>
                        <h3 style={{textAlign: "center"}}>
                            <font style={{textAlignVertical: 'inherit'}}>Something is happening at the Heigl Manufactory!</font>
                        </h3>
                        <p style={{textAlign: "center"}}><strong><font>Our shop is closed on Mondays and Tuesdays .</font></strong></p>
                        <p style={{textAlign: "center"}}><strong><font>Are you still in the mood for fresh wieners and the like? Then simply order from our online shop! There is no longer a minimum order value for our local delivery. So nothing stands in the way of your snack with Heigl Stuff!</font></strong></p>
                        <p style={{textAlign: "center"}}><strong><font>PS The delivery is free anyway - so what are you waiting for?</font></strong></p>
                        <p style={{textAlign: "center"}}><a href="/" className="button-cta "><font style={{textAlignVertical: 'inherit'}}>to the Meat Shop</font></a></p>
                    </div>
                </div>
            </div>
            <div className="cols-wrapper cols-full customstyle-white-bg customstyle-lesser-space-bottom customstyle-no-aos">
                <div className="cols cols-100">
                    <div className="col col-txt">
                        <div className="marquee-wrapper">
                            <span className="marquee-item">homemade . out of love for meat&nbsp;&nbsp;</span>
                            <span className="marquee-item">homemade . out of love for meat&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cols-wrapper customstyle-white-bg customstyle-50-50-space-left customstyle-50-50-right-space-top">
                <div className="cols cols-50-50 cols-pictxt">
                    <div className="col col-txt" data-aos="fade-right" data-aos-duration="800">
                        <div className="h2-like">
                            <p>Wenn Fleisch</p>
                        </div>
                        <div className="h1-like">
                            <h2>dann Heigl</h2>
                        </div>
                        <p>Wir bei Heigl haben unser traditionsreiches Handwerk gelernt. Mit Leidenschaft und Erfahrung arbeiten wir jeden Tag für beste und frischeste Produkte für qualitätsbewusste Menschen wie dich. Unsere hochwertigen Produkte vertreiben wir in unserer <strong>Metzgerei in Benningen</strong>, über unseren Metzgerei Online-Shop , unseren Lieferservice, in Wochenmarkt  in Memmingen. Und wenn du eine Feier planst und keinen Bock hast, selbst zu kochen, sind wir dein Catering-Service  im Allgäu.</p>
                        <p>
                            <a href="/" className="button">unsere besten</a>
                            &nbsp;
                            <a href="/" className="button-outline">The Heigl History</a>
                        </p>
                    </div>
                    <div className="col col-pic" data-aos="fade-left" data-aos-duration="800">
                        <div className="pic-wrapper">
                            <picture>
                                <img src={DaanImg} alt="DaanImg"></img>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cols-wrapper customstyle-white-bg customstyle-50-50-space-left customstyle-50-50-left-space-top">
                <div className="cols cols-50-50 cols-pictxt">
                <div className="col col-pic" data-aos="fade-right" data-aos-duration="800">
                        <div className="pic-wrapper">
                            <picture>
                                <img src={ButcherImg} alt="ButcherImg"></img>
                            </picture>
                        </div>
                    </div>
                    <div className="col col-txt" data-aos="fade-left" data-aos-duration="800">
                        <h3>The butcher you can trust</h3>
                        <p>Unseren Kunden ist es wichtig zu wissen, woher das Lebensmittel kommt. Neben Nachhaltigkeit und Regionalität, worauf wir wahnsinnig viel Wert legen, steht bei uns auch besonders das Tierwohl, der Respekt zum Tier und der sensible Umgang mit dem Lebewesen im Vordergrund.</p>
                        <p>Und ob du´s glaubst oder nicht, das wirkt sich auch auf den Geschmack aus. Glücklich schmeckt einfach besser.</p>
                        <p>
                            <a href="/" className="button-outline">The Heigl History</a>
                        </p>
                    </div>
                </div>
            </div>
            <div id="b-10" className="cols-wrapper customstyle-parallax-height cols-parallax cols-bg">
                <div className="cols cols-100">
                    <div className="col col-txt" data-aos="zoom-in" data-aos-duration="800">
                        <h2 style={{textAlign: "center"}}>Catering de luxe</h2>
                        <div className="h1-like">
                            <h2 style={{textAlign: "center"}}>MEAT uns für deine Party</h2>
                        </div>
                        <p style={{textAlign: "center"}}>
                            <a href="/" className="button-cta">Direkt Anfragen</a>
                            &nbsp;
                            <a href="/" className="button">Catering Service</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="cols-wrapper animated-heading">
                <div className="cols cols-100">
                    <div className="col col-module_SocialMediaWall">
                        <div className="smw-marquee-container">
                            <div className="smw-marquee-wrapper">
                                <span className="smw-marquee-item">Follow us on Social Meatia&nbsp;&nbsp;</span>
                                <span className="smw-marquee-item">Follow us on Social Meatia&nbsp;&nbsp;</span>
                            </div>
                        </div>
                        <div className="wwmodule-list">
                            <ol>
                                <li className="smw-item" data-aos="zoom-in" data-aos-duration="800">
                                    <div className="smw-icon">
                                    <img src={InstaIcon} alt="InstaIcon" />
                                    </div>
                                    <a href="/" className="smw-pic">
                                    <picture>
                                        <img src={WallImg1} alt="WallImg1" />
                                    </picture>
                                    </a>
                                </li>
                                <li className="smw-item" data-aos="zoom-in" data-aos-duration="800">
                                    <div className="smw-icon">
                                    <img src={InstaIcon} alt="InstaIcon" />
                                    </div>
                                    <a href="/" className="smw-pic">
                                    <picture>
                                        <img src={WallImg2} alt="WallImg1" />
                                    </picture>
                                    </a>
                                </li>
                                <li className="smw-item" data-aos="zoom-in" data-aos-duration="800">
                                    <div className="smw-icon">
                                    <img src={InstaIcon} alt="InstaIcon" />
                                    </div>
                                    <a href="/" className="smw-pic">
                                    <picture>
                                        <img src={WallImg3} alt="WallImg1" />
                                    </picture>
                                    </a>
                                </li>
                                <li className="smw-item" data-aos="zoom-in" data-aos-duration="800">
                                    <div className="smw-icon">
                                    <img src={InstaIcon} alt="InstaIcon" />
                                    </div>
                                    <a href="/" className="smw-pic">
                                    <picture>
                                        <img src={WallImg4} alt="WallImg1" />
                                    </picture>
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <a href="/" className="smw-button button-outline">Social Media Wall</a>
                    </div>
                </div>
            </div>
        </main>
      </div>
      </>
    );
}