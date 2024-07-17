"use client";

import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import companyLogo from "../../media/img/DZ12.svg"; // Adjust the path as needed

const fadeInLogo = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutScreen = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const SplashScreenContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  justify-content: center;
  align-items: center;
  z-index: 10000000;
  animation: ${(props) => (props.fadeOut ? fadeOutScreen : "none")} 2s
    ease-in-out;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  animation: ${fadeInLogo} 2s ease-in-out forwards;
`;

export default function SplashScreen({ show, fadeOut }) {
  return (
    <SplashScreenContainer show={show} fadeOut={fadeOut}>
      <Logo src={companyLogo.src} alt="Company Logo" />
    </SplashScreenContainer>
  );
}
