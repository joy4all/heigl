import React from "react";
import blackInstaIcon from "../assets/images/black-insta-icon.svg";
import blackFbIcon from "../assets/images/black-fb-icon.svg";
import werbewindImg from "../assets/images/werbewind.svg";
import footerText from "../assets/images/footer-text.svg";

export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <footer className="footer">
          <div className="footer-box footer-box-1">
            <div className="footer-content-wrapper">
              <div className="footer-box-title">Metzgerei Heigl</div>
              <div className="footer-street">Hauptstraße 17</div>
              <div className="footer-address">D-87734 Benningen</div>
              <a href="/" className="footer-phone">T +49 8331 88161</a>
            </div>
            <div className="footer-contact-wrapper">
              <a href="/" className="footer-button button-cta">Kontakt // Email</a>
              <a href="/" className="footer-instagram"><img src={blackInstaIcon} alt="blackInstaIcon" /></a>
              <a href="/" className="footer-facebook"><img src={blackFbIcon} alt="blackFbIcon" /></a>
            </div>
          </div>
          <div className="footer-box footer-box-2">
            <div className="footer-opening-wrapper">
              <div className="footer-box-title">Meat 'n Greet</div>
              <div className="footer-opening-box">
                <table border="1" cellpadding="1" cellspacing="1" style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td>mo. di.</td>
                      <td>nur online</td>
                    </tr>
                    <tr>
                      <td>mi.</td>
                      <td>07:30 - 13:00 Uhr</td>
                    </tr>
                    <tr>
                      <td>do. fr.</td>
                      <td>07:30 - 13:00 Uhr <br />
                        14:00 - 18:00 Uhr</td>
                    </tr>
                    <tr>
                      <td>sa.</td>
                      <td>07:30 - 12:00 Uhr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="footer-box footer-box-3">
            <div className="footer-box-title">Links</div>
              <ul>
                <li><a href="/">Online Meat Shop</a></li>
                <li><a href="/">Catering</a></li>
                <li><a href="/">Team Heigl</a></li>
                <li><a href="/">Unsere Werte</a></li>
              </ul>
          </div>
          <div className="copyright-wrapper">
            <div className="copyright">
              <div className="impressum-wrapper">
                <a href="/">Impressum</a> | <a href="/">Datenschutz</a>
              </div>
              <div className="copyright-ww">
                <a href="/" className="ww-logo"><img src={werbewindImg} alt="werbewindImg" /></a>
                ©&nbsp;2024
              </div>
            </div>
          </div>
          <div className="footer-big-text">
            <img src={footerText} alt="footerText" />
          </div>
        </footer>
      </div>
    </>
  );
}