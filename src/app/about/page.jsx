"use client";

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import image from "../../media/img/DZ12_Carbon_Mjolner_4.png"; // Replace with your actual image path
import newImage from "../../media/img/DZ12.svg"; // Replace with your new image path

const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: -20%;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px 5vw;
  width: 100%;
  z-index: 2;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  background-image: url(${image.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Header = styled.h1`
  font-size: 60px;
  text-align: center;
  margin-bottom: 20px;
`;

const SubHeader = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-bottom: 40px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
`;

const WhiteSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  width: 100%;
  padding: 50px 5vw;
  z-index: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const WhiteTextContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const WhiteImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  filter: invert(1);
`;

const WhiteImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const WhiteSectionReversed = styled(WhiteSection)`
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <Container>
      <VideoBackground ref={videoRef} preload="auto" autoPlay loop muted>
        <source
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          src="/video.mp4"
        ></source>
      </VideoBackground>
      <ContentContainer>
        <ImageContainer>
          <BackgroundImage />
        </ImageContainer>
        <TextContainer>
          <Header>SAMPLE HEADER TEXT</Header>
          <SubHeader>SAMPLE SUBHEADER TEXT</SubHeader>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
            scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
            nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue
            ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum
            dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
            turpis.
          </Paragraph>
          <Paragraph>
            Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor
            accumsan. Aliquam in felis sit amet augue. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas nisl est, ultrices nec
            congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
            aliquet.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
            scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
            nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue
            ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum
            dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
            turpis.
          </Paragraph>
        </TextContainer>
      </ContentContainer>
      <WhiteSection>
        <WhiteTextContainer>
          <Header>New Section Header</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Paragraph>
        </WhiteTextContainer>
        <WhiteImageContainer>
          <WhiteImage src={newImage.src} alt="New Section Image" />
        </WhiteImageContainer>
      </WhiteSection>
      <WhiteSectionReversed>
        <WhiteTextContainer>
          <Header>Another Section Header</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Paragraph>
        </WhiteTextContainer>
        <WhiteImageContainer>
          <WhiteImage src={newImage.src} alt="Another Section Image" />
        </WhiteImageContainer>
      </WhiteSectionReversed>
    </Container>
  );
}
