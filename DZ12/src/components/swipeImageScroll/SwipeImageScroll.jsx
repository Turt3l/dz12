"use client";

import React, { useEffect, useRef, useState } from "react";
import interior1 from "../../media/img/interior1.jpg";
import interior2 from "../../media/img/interior2.jpg";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust as needed */
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const OverlayImage = styled(Image)`
  z-index: 1;
`;

export default function SwipeImageScroll() {
  const scrollSectionRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    if (scrollSectionRef.current) {
      const rect = scrollSectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const scrollY = window.scrollY;
      const newScrollPosition = Math.max(
        0,
        Math.min(1, (scrollY - sectionTop) / sectionHeight)
      );

      setScrollPosition(newScrollPosition);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (scrollSectionRef.current) {
      observer.observe(scrollSectionRef.current);
    }

    return () => {
      if (scrollSectionRef.current) {
        observer.unobserve(scrollSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  useEffect(() => {
    if (scrollSectionRef.current) {
      const rect = scrollSectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const playbackConst = 1000; // Adjust the constant as needed
      const duration = sectionHeight / playbackConst;
      scrollSectionRef.current.style.height = `${duration * 100}vh`;
    }
  }, [scrollSectionRef.current]);

  return (
    <Container ref={scrollSectionRef}>
      <Image
        src={interior1.src}
        alt="Underlying"
        style={{
          transform: `translateX(${-scrollPosition * 100}%)`,
          position: inView ? "fixed" : "absolute",
        }}
      />
      <OverlayImage
        src={interior2.src}
        alt="Overlay"
        style={{
          transform: `translateX(${(1 - scrollPosition) * 100}%)`,
          position: inView ? "fixed" : "absolute",
        }}
      />
    </Container>
  );
}
