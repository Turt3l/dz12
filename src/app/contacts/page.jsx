"use client";

import React from "react";
import styled from "styled-components";
import banner from "../../media/img/DZ12_Carbon_Mjolner_4.png";
import MapComponent from "@/components/map/MapComponent";

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${banner.src});
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
    z-index: 1;
  }
`;

const BannerText = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const BannerTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const BannerSubtitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 10px 0 0 0;
`;

const ContentContainer = styled.div`
  background-color: white;
  padding: 40px;
`;

const Content = styled.div`
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PhoneNumbersContainer = styled.div`
  width: 60%;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  display: flex;
`;

const MapContainer = styled.div`
  width: 40%;
  box-sizing: border-box;
`;

const DropdownContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 50%;
`;

const DropdownTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const DropdownContent = styled.div`
  font-size: 16px;
  color: #666;
`;

export default function Contacts() {
  return (
    <>
      <BannerContainer>
        <BannerText>
          <BannerTitle>Make a Call</BannerTitle>
          <BannerSubtitle>Or visit one of our certified dealers</BannerSubtitle>
        </BannerText>
      </BannerContainer>
      <ContentContainer>
        <Content>
          <PhoneNumbersContainer>
            <DropdownContainer>
              <DropdownTitle>CROATIA</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +11111111</p>
                <p>Monday to Friday</p>
                <p>9:00am to 5:00pm</p>
                <p>(EET)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>TURKEY</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +11111111</p>
                <p>Monday to Friday</p>
                <p>9:00am to 5:00pm</p>
                <p>(EET)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>GERMANY</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +11111111</p>
                <p>Monday to Friday</p>
                <p>9:00am to 5:00pm</p>
                <p>(EET)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>NORWAY</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +11111111</p>
                <p>Monday to Friday</p>
                <p>9:00am to 5:00pm</p>
                <p>(EET)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>SWEDEN</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +11111111</p>
                <p>Monday to Friday</p>
                <p>9:00am to 5:00pm</p>
                <p>(EET)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>LATVIA</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +11111111</p>
                <p>Monday to Friday</p>
                <p>9:00am to 5:00pm</p>
                <p>(EET)</p>
              </DropdownContent>
            </DropdownContainer>
          </PhoneNumbersContainer>
          <MapContainer>
            <MapComponent />
          </MapContainer>
        </Content>
      </ContentContainer>
    </>
  );
}
