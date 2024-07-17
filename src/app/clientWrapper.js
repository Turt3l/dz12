"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen/SplashScreen"; // Adjust the path as needed

export default function ClientWrapper({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setShowSplash(false), 2000); // Adjust the duration of the fade out to 2 seconds
      }, 2000); // Adjust the duration of the splash screen display to 2 seconds
    };

    handlePageLoad();
  }, []);

  return (
    <>
      <SplashScreen show={showSplash} fadeOut={fadeOut} />
      {children}
    </>
  );
}
