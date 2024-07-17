"use client";

import React from "react";
import styled from "styled-components";
import banner from "../../media/img/DZ12_Carbon_Mjolner_4.png";
import MapComponent from "@/components/map/MapComponent";

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const BannerText = styled.div`
  position: absolute;
  top: 60%;
  letter-spacing: 3px;
  left: 50%;
  font-size: 35px;
  font-weight: 500;
  transform: translate(-50%, -50%);
`;

const BannerImage = styled.div`
  height: 30vh;
  text-align: center;
  background-image: url(${banner.src});
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
`;

const ContentContainer = styled.div`
  background-color: white;
  padding: 40px;
`;

const ContentHeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ContentHeaderTitle = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 10px;
`;

const ContentHeaderSubtitle = styled.h3`
  font-size: 18px;
  color: #666;
`;

const Content = styled.div`
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-between;
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
        <BannerImage />
        <BannerText>Contacts</BannerText>
      </BannerContainer>
      <ContentContainer>
        <ContentHeaderContainer>
          <ContentHeaderTitle>Make a Call</ContentHeaderTitle>
          <ContentHeaderSubtitle>
            Or visit one of our certified dealers
          </ContentHeaderSubtitle>
        </ContentHeaderContainer>
        <Content>
          <PhoneNumbersContainer>
            <DropdownContainer>
              <DropdownTitle>INTERNATIONAL</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +39 051 9597282</p>
                <p>Monday to Friday</p>
                <p>(except holidays):</p>
                <p>8:00am to 7:00pm</p>
                <p>(GMT+1)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>NORTH AMERICA</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +1 866 681 6276</p>
                <p>Monday to Friday</p>
                <p>(except holidays):</p>
                <p>8:00am to 5:00pm</p>
                <p>(EST)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>CHINA</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +86 4001166606</p>
                <p>Monday to Friday:</p>
                <p>9:00am to 6:00pm</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>JAPAN</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +81 (0)120 988 889</p>
                <p>Monday to Sunday:</p>
                <p>9:00am to 7:00pm</p>
                <p>(JST)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>GERMANY</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +49 30 1234567</p>
                <p>Monday to Friday</p>
                <p>9:00am to 6:00pm</p>
                <p>(CET)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>NORWAY</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +47 21 123456</p>
                <p>Monday to Friday</p>
                <p>9:00am to 5:00pm</p>
                <p>(CET)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>SWEDEN</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +46 8 1234567</p>
                <p>Monday to Friday</p>
                <p>9:00am to 5:00pm</p>
                <p>(CET)</p>
              </DropdownContent>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownTitle>LATVIA</DropdownTitle>
              <DropdownContent>
                <p>PHONE: +371 6 1234567</p>
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
