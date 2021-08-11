import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__text">
        <div className="footer__left">
          <p>
            <a href="https://www.udemy.com/udemy-business/?locale=en_US&mx_pg=home-page&path=%2F&ref=footer">
              Udemy Business
            </a>
          </p>
          <p>
            <a href="https://www.udemy.com/teaching/?ref=teach_footer">
              Teach on Udemy
            </a>
          </p>
          <p>
            <a href="https://www.udemy.com/mobile/">Get the app</a>
          </p>
          <p>
            <a href="https://about.udemy.com/?locale=en-us">About us</a>
          </p>
          <p>
            <a href="https://about.udemy.com/company?locale=en-us#offices">
              Contact us
            </a>
          </p>
        </div>
        <div className="footer__center">
          <p>
            <a href="https://about.udemy.com/careers?locale=en-us">Careers</a>
          </p>
          <p>
            <a href="https://blog.udemy.com/?ref=footer">Blog</a>
          </p>
          <p>
            <a href="https://www.udemy.com/support/">Help and Support</a>
          </p>
          <p>
            <a href="https://www.udemy.com/affiliate/">Affiliate</a>
          </p>
        </div>
        <div className="footer__footer__right">
          <p>
            <a href="https://www.udemy.com/terms/">Terms</a>
          </p>
          <p>
            <a href="https://www.udemy.com/terms/privacy/">Privacy policy</a>
          </p>
          <p>
            <a href="https://www.udemy.com/sitemap/">Sitemap</a>
          </p>
        </div>
      </div>
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
        alt="logo"
        className="footer__image"
      />
      <p className="footer__smallText">© 2021 Udemy, Inc.</p>
    </div>
  );
}

export default Footer;
