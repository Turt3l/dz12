"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import image from "../../media/img/DZ12_img.png";
import logo from "../../media/img/DZA2.svg";
import suspension from "../../media/img/suspension.jpg";
import brakes from "../../media/img/brakes.jpg";
import engine from "../../media/img/engine_photo.jpg";
import chassis from "../../media/img/chassis.jpg";
import interior1 from "../../media/img/interior1.jpg";
import interior2 from "../../media/img/interior2.jpg";
import gearbox from "../../media/img/gearbox.jpg"; // Assuming you have an image for the gearbox section
import { Krona_One } from "next/font/google";
import Visualizer from "@/components/audioVizualiser/Vizualiser";
import SampleTable from "@/components/table/table";
import VideoScroll from "@/components/videoScroll/VideoScroll";

const ImageElement = styled.div`
  background-image: url(${image.src});
  background-size: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 100% 0;
  z-index: 100; /* Ensure this is on top */
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
  z-index: 101; /* Make sure this is above the image */
  font-size: 100px;
`;

const SubText = styled.div`
  color: white;
  font-size: 15px;
  margin-top: 20px;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverviewImage = styled.div`
  width: 80%;
  height: 60%;
  background-image: url(${logo.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
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

const InteriorTextContainer = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;
`;

const InteriorTextHeader = styled.h2`
  padding-bottom: 5%;
  font-size: 45px;
  color: white;
`;

const InteriorText = styled.p`
  color: white;
  font-size: 30px;
  font-weight: 300;
`;

const krona_One = Krona_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const parallaxRefs = useRef([]);
  const [inViewElements, setInViewElements] = useState(new Set());
  const images = [
    engine.src,
    interior1.src,
    chassis.src,
    gearbox.src,
    suspension.src,
    brakes.src,
  ];
  const texts = [
    {
      header: "Engine",
      text: "Our own in-house developed air-cooled flat 12 engine, in the spirit of the original, down to the iconic horizontal cooling fan and firing order. Entirely CAD developed and CNC machined from heat treated and in process heat cycled billets.",
    },
    {
      header: "Interior",
      text: "Bespoke per each client's specifications, the driver oriented analog gauges openly provide the driver all the vital information. No-nonsense, motorsports inspired interior faithful to the spirit of the original tailored with carbon fiber, leather and Alcantara.",
    },
    {
      header: "Chassis",
      text: "The DZ12 features a CFC (carbon fiber composite) monocoque/trellis (true to original) space frame hybrid chassis for increased strength and safety. A carbon fiber/honeycomb composite monocoque encapsulating the passenger compartment provides increased safety and torsional rigidity while a true to original trellis space frame has been reengineered from factory blueprints in CAD. These advancements allow us to integrate ground effects based on CFD testing to reduce drag and increase downforce.\n\nTranslation: more speed, more stability, more pleasure.",
    },
    {
      header: "Gearbox",
      text: "The DZA flat 12 is coupled to a Graziano 6 speed manual transaxle.",
    },
    {
      header: "Suspension",
      text: "With a reputation that dominates every form of motorsport, there is no other option. Ohlins.\n\nOhlins TTX dampers at each corner with an integrated lifting system for no compromises. Optional electronically adjustable dampening inside the cockpit. Offering modern ride quality with enough adjustability to go from pushing physics at the Nurburgring to cruising the streets of Monaco.",
    },
    {
      header: "Brakes",
      text: "Brembo's GT/R Carbon ceramic braking system is the pinnacle of stopping power. Minimizing unsprung weight improving chassis dynamics and handling characteristics.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((element) => {
        if (inViewElements.has(element)) {
          const scrollTop = window.scrollY;
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

    window.addEventListener("scroll", handleScroll);

    // Initial call to set background positions on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      parallaxRefs.current.forEach((element) => observer.unobserve(element));
    };
  }, [inViewElements]);

  return (
    <>
      <div>
        <ImageElement />
        <LogoText className={krona_One.className}>
          DZ12
          <SubText>
            An air-cooled flat 12 engine.
            <br />
            A manual gearbox.
            <br />
            The definitive analog driving experience.
          </SubText>
        </LogoText>
      </div>

      {/* Overview Section */}
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

      {/* Engine Section */}
      <div>
        <SectionContainer>
          <SectionImage
            style={{ backgroundImage: `url(${images[0]})` }}
            className="parallax"
          />
          <SectionTextContainer>
            <SectionTextHeader>{texts[0].header}</SectionTextHeader>
            <SectionText>{texts[0].text}</SectionText>
            <Visualizer />
          </SectionTextContainer>
        </SectionContainer>
      </div>
      <div>
        <VideoScroll style={{ zIndex: 99 }} />
      </div>
      {/* Interior Section */}
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
          <InteriorTextContainer>
            <InteriorTextHeader>{texts[1].header}</InteriorTextHeader>
            <InteriorText>{texts[1].text}</InteriorText>
          </InteriorTextContainer>
        </InteriorSectionContainer>
      </div>

      {/* Chassis Section */}
      <div>
        <SectionContainer>
          <SectionImage
            style={{ backgroundImage: `url(${images[2]})` }}
            className="parallax"
          />
          <SectionTextContainer>
            <SectionTextHeader>{texts[2].header}</SectionTextHeader>
            <SectionText>{texts[2].text}</SectionText>
          </SectionTextContainer>
        </SectionContainer>
      </div>

      {/* Gearbox Section */}
      <div>
        <SectionContainer>
          <SectionImage
            style={{ backgroundImage: `url(${images[3]})` }}
            className="parallax"
          />
          <SectionTextContainer>
            <SectionTextHeader>{texts[3].header}</SectionTextHeader>
            <SectionText>{texts[3].text}</SectionText>
          </SectionTextContainer>
        </SectionContainer>
      </div>

      {/* Suspension Section */}
      <div>
        <SectionContainer>
          <SectionImage
            style={{ backgroundImage: `url(${images[4]})` }}
            className="parallax"
          />
          <SectionTextContainer>
            <SectionTextHeader>{texts[4].header}</SectionTextHeader>
            <SectionText>{texts[4].text}</SectionText>
          </SectionTextContainer>
        </SectionContainer>
      </div>

      {/* Brakes Section */}
      <div>
        <SectionContainer>
          <SectionImage
            style={{ backgroundImage: `url(${images[5]})` }}
            className="parallax"
          />
          <SectionTextContainer>
            <SectionTextHeader>{texts[5].header}</SectionTextHeader>
            <SectionText>{texts[5].text}</SectionText>
          </SectionTextContainer>
        </SectionContainer>
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
