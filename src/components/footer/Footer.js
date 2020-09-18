import React from "react";
// import { Button, Row } from "reactstrap";
// import { Link } from "react-router-dom";
// import "./Footer.css";


function Footer() {
    return (
        <div className="footer-container text-light bg-dark p-5 shadow-lg">
        {/* <div className="footer-links">
            <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>О нас</h2>
                <Link to="/">Отзывы</Link>
                <Link to="/">Карьера</Link>
                <Link to="/">Инвесторы</Link>
                <Link to="/">Срок службы</Link>
            </div>
            <div className="footer-link-items">
                <h2>Способы оплаты</h2>
                <Link to="/">Visa</Link>
                <Link to="/">MasterCard</Link>
                <Link to="/">Qiwi Wallet</Link>
                <Link to="/">Элсом</Link>
            </div>
            </div>
            <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Свяжитесь с нами</h2>
                <Link to="/">+996500987878</Link>
                <Link to="/">myProject@gmail.com</Link>
            </div>
            <div className="footer-link-items">
            <h2>Социальные сети</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            </div>
        </div>
        </div>
        <Row className='flex-column align-items-center'>
        <div className="social-icons mb-3">
            <Link
            className="social-icons-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
            >
            <i className="fa fa-facebook-f"></i>
            </Link>
            <Link
            className="social-icons-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagramm"
            >
            <i className="fa fa-instagram"></i>
            </Link>
            <Link
            className="social-icons-link youtube"
            to="/"
            target="_blank"
            aria-label="Facebook"
            >
            <i className="fa fa-youtube"></i>
            </Link>
        </div> */}
        <div className='d-flex justify-content-center'>
            <small className="website-rights">
                <p>При поддержке Makers Coding Bootcamp Bishkek</p>
                Copyright © 2020 ecoFriday. All Rights Reserved
            </small>
        </div>
        {/* </Row> */}
        
    </div>
    );
}

export default Footer;
