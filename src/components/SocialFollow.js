import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/SocialFollow.css";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div className="social-container">
            <h3 className="share">Compartilhe</h3>
            <a href="https://facebook.com" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://web.whatsapp.com/" className="whatsapp social">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </div>
    );
}