// import 'font-awesome/css/font-awesome.min.css'; 
import React from "react";
import "./Footer.css";
import logo from './logo-white.png'

import { FaYoutube , FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
        <footer>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={logo} alt="logo" className="logo-footer" />
                <div className="footer-content-left-socials">
                    <br />
                    <p>
                        Connect with us on:
                    </p>
                    <ul className="footer-socials">
                        <li><a href="https://www.facebook.com/jiitopticachapter"> <FaFacebook size = "1.5rem" /> </a></li>
                        <li><a href="https://www.youtube.com/channel/UCDR-ExLpXmcMkT0RHILMKPw/featured"> <FaYoutube size = "1.5rem" /> </a></li>
                        <li><a href="https://www.linkedin.com/company/jiitopticachapter"> <FaLinkedin size = "1.5rem" /> </a></li>
                        <li><a href="https://twitter.com/jiitoptica"> <FaTwitter size = "1.5rem" /> </a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-content-right">

                <div className="footer-content-right-contacts">
                    <div className="footer-content-right-contacts-p1">
                        <p>Ayush Singhal</p>
                        <p>+91 8287188554</p>
                    </div>
                    <div className="footer-content-right-contacts-p2">
                        <p>Anshika Jain</p>
                        <p>+91 7390941228</p>
                    </div>

                </div>
                {/* <ul className="footer-content-right-quick-links">
                    <li><a href="#"> About Us</a></li>
                    <li><a href="#"> FAQs</a></li>
                    <li><a href="#"> Timeline</a></li>
                    <li><a href="#"> Team</a></li>
                </ul> */}

            </div>
        </div>

        <div className="footer-bottom">
            <p>copyright &copy; <a href="#">JIIT OPTICA CHAPTER</a>  </p>
        </div>

    </footer>
     
      
    </div>
  );
}
export default Footer;

