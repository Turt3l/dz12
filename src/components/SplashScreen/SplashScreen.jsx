"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import companyLogo from "../../media/img/DZ12.svg"; // Adjust the path as needed

const fadeOutScreen = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const SplashScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${(props) => (props.fadeOut ? fadeOutScreen : "none")} 2s
    ease-in-out;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

export default function SplashScreen({ show, fadeOut }) {
  return (
    <SplashScreenContainer show={show} fadeOut={fadeOut}>
      <Logo src={companyLogo} alt="Company Logo" />
    </SplashScreenContainer>
  );
}
