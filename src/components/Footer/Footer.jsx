"use client";

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import companyLogo from "../../media/img/DZ12.svg"; // Replace with your actual logo path

const FooterContainer = styled.footer`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 20px 40px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin: 0 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterLogo = styled.img`
  width: 150px; // Adjust the size as needed
  margin-bottom: 10px;
  padding: 25px;
`;

const FooterSocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialMediaIcon = styled(FontAwesomeIcon)`
  color: white;
  margin: 0 10px;
  font-size: 20px;

  &:hover {
    color: #ccc;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={companyLogo.src} alt="Company Logo" />
      <FooterLinksContainer>
        <FooterLink href="#">HOME</FooterLink>
        <FooterLink href="#">TECHNOLOGY</FooterLink>
        <FooterLink href="#">ABOUT US</FooterLink>
        <FooterLink href="#">CONTACT US</FooterLink>
      </FooterLinksContainer>
      <FooterSocialMediaContainer>
        <SocialMediaIcon icon={faFacebook} />
        <SocialMediaIcon icon={faInstagram} />
        <SocialMediaIcon icon={faTwitter} />
        <SocialMediaIcon icon={faYoutube} />
        <SocialMediaIcon icon={faLinkedin} />
        <SocialMediaIcon icon={faTiktok} />
      </FooterSocialMediaContainer>
    </FooterContainer>
  );
}
