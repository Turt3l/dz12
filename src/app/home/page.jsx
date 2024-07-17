"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import image from "../../media/img/DZ12_Carbon_Mjolner_4.png";
import logo from "../../media/img/DZ12.svg";
import suspension from "../../media/img/suspension.jpg";
import brakes from "../../media/img/brakes.jpg";
import engine from "../../media/img/engine_photo.jpg";
import interior1 from "../../media/img/interior1.jpg";
import interior2 from "../../media/img/interior2.jpg";
import { Krona_One } from "next/font/google";
import SampleTable from "@/components/table/table";
import VideoScroll from "@/components/videoScroll/VideoScroll";

const Visualizer = dynamic(
  () => import("@/components/audioVizualiser/Vizualiser"),
  { ssr: false }
);

const ImageElement = styled.div`
  background-image: url(${image.src});
  background-size: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 100% 0;
  opacity: 0.5;
  z-index: -100;
  position: relative;
  margin-top: 10%;
`;

const LogoText = styled.div`
  color: white;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 30%;
  text-align: center;
  z-index: 100;
  font-size: 100px;
`;

const EngineContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  height: 100vh;
`;

const EngineTextContainer = styled.div`
  width: 60%;
  text-align: -webkit-center;
  text-align: center;
`;

const EngineBackgroundContainer = styled.div`
  width: 40%;
  background-image: url(${engine.src});
  background-repeat: no-repeat;
  background-position: 50% 100%;
  padding-left: 10%;
`;

const EngineText = styled.p`
  color: black;
  font-size: 30px;
  font-weight: 300;
`;

const EngineHeader = styled.h2`
  padding-bottom: 5%;
  font-size: 45px;
`;

const OverviewContainer = styled.div`
  background-color: white;
  height: 70vh;
  display: flex;
  text-align: center;
  padding-left: 5vw;
  padding-right: 5vw;
`;

const OverviewTextContainer = styled.div`
  width: 50%;
  align-content: center;
`;

const OverviewText = styled.p`
  color: black;
  font-size: 30px;
  font-weight: 300;
`;

const OverviewTextHeader = styled.h2`
  padding-bottom: 5%;
  position: relative;
  font-size: 45px;
`;

const OverviewImageContainer = styled.div`
  width: 50%;
`;

const OverviewImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${logo.src});
  background-repeat: no-repeat;
  filter: invert(100%);
  background-position: 50% 50%;
`;

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  height: 100vh;
  padding: 50px 5vw;
  align-items: center;
  justify-content: space-between;
`;

const SectionImage = styled.div`
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const SectionTextContainer = styled.div`
  width: 45%;
  text-align: left;
`;

const SectionTextHeader = styled.h2`
  padding-bottom: 5%;
  font-size: 45px;
`;

const SectionText = styled.p`
  color: black;
  font-size: 30px;
  font-weight: 300;
`;

const SpecificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 50px 5vw;
`;

const SpecificationsHeader = styled.h2`
  padding-bottom: 5%;
  font-size: 45px;
  text-align: center;
  color: black;
`;

const InteriorSectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  background-color: black;
  padding: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const InteriorImage = styled.div`
  width: 45%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  &:first-child {
    width: 70%;
    height: 100%;
  }
  &:last-child {
    width: 30%;
    height: 100%;
  }
`;

const krona_One = Krona_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const parallaxRefs = useRef([]);
  const [inViewElements, setInViewElements] = useState(new Set());
  const images = [suspension.src, brakes.src, engine.src];
  const texts = [
    {
      header: "Suspension",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sodales sapien id finibus molestie. Quisque maximus nunc",
    },
    {
      header: "Brakes",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sodales sapien id finibus molestie. Quisque maximus nunc",
    },
    {
      header: "Engine",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sodales sapien id finibus molestie. Quisque maximus nunc",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((element) => {
        if (inViewElements.has(element)) {
          const scrollTop = window?.scrollY;
          const elementTop = element.getBoundingClientRect().top + scrollTop;
          const offset = (scrollTop - elementTop) * 0.6;
          element.style.backgroundPositionY = `${offset}px`;
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewElements((prev) => new Set(prev.add(entry.target)));
          } else {
            setInViewElements((prev) => {
              const newSet = new Set(prev);
              newSet.delete(entry.target);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".parallax");
    parallaxRefs.current = Array.from(elements);
    parallaxRefs.current.forEach((element) => observer.observe(element));

    window?.addEventListener("scroll", handleScroll);

    // Initial call to set background positions on mount
    handleScroll();

    return () => {
      window?.removeEventListener("scroll", handleScroll);
      parallaxRefs.current.forEach((element) => observer.unobserve(element));
    };
  }, [inViewElements]);

  return (
    <>
      <div>
        <ImageElement className="parallax" />
        <LogoText className={krona_One.className}>DZ12</LogoText>
      </div>
      <div>
        <OverviewContainer>
          <OverviewTextContainer>
            <OverviewTextHeader>Introduction</OverviewTextHeader>
            <OverviewText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
              nulla vitae turpis vulputate sagittis. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Vivamus sodales sapien id finibus molestie. Quisque maximus nunc
            </OverviewText>
          </OverviewTextContainer>
          <OverviewImageContainer>
            <OverviewImage />
          </OverviewImageContainer>
        </OverviewContainer>
      </div>
      <div>
        <EngineContainer>
          <EngineBackgroundContainer className="parallax"></EngineBackgroundContainer>
          <EngineTextContainer>
            <EngineHeader>Feel the engine</EngineHeader>
            <EngineText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Vivamus sodales sapien id finibus molestie. Quisque maximus nunc
            </EngineText>
            <Visualizer />
          </EngineTextContainer>
        </EngineContainer>
      </div>
      <div>
        <VideoScroll></VideoScroll>
      </div>
      <div>
        <InteriorSectionContainer>
          <InteriorImage
            style={{ backgroundImage: `url(${interior1.src})` }}
            className="parallax"
          />
          <InteriorImage
            style={{ backgroundImage: `url(${interior2.src})` }}
            className="parallax"
          />
        </InteriorSectionContainer>
      </div>
      <div>
        {texts.map((text, index) => (
          <SectionContainer key={index}>
            <SectionImage
              style={{ backgroundImage: `url(${images[index]})` }}
              className="parallax"
            />
            <SectionTextContainer>
              <SectionTextHeader>{text.header}</SectionTextHeader>
              <SectionText>{text.text}</SectionText>
            </SectionTextContainer>
          </SectionContainer>
        ))}
      </div>
      <div>
        <SpecificationsContainer>
          <SpecificationsHeader>Specifications</SpecificationsHeader>
          <SampleTable />
        </SpecificationsContainer>
      </div>
    </>
  );
}
