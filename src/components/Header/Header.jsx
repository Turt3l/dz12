"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import useScrollListener from "./useScrollListener";
import Link from "next/link";
import logo from "../../media/img/DZA.jpg";

const HeaderContainer = styled.div`
  letter-spacing: 5px;
  font-size: 0.8rem;
  font-weight: 500;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 20px;
  width: 150px;
  height: 80px;
  background-image: url(${logo.src});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const HeaderLinksContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const HeaderLink = styled.div`
  cursor: pointer;
  padding: 20px;
  &:hover {
    color: gray;
  }
`;

export default function Header() {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // Update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <div className={`headerContainer ${navClassList.join(" ")}`}>
      <HeaderContainer>
        <LogoContainer onClick={() => (window.location.href = "/home")} />
        <HeaderLinksContainer>
          <HeaderLink>
            <Link href={"/home"}>Home</Link>
          </HeaderLink>
          <HeaderLink>
            <Link href={"/technology"}>Technology</Link>
          </HeaderLink>
          <HeaderLink>
            <Link href={"/about"}>About us</Link>
          </HeaderLink>
          <HeaderLink>
            <Link href={"/contacts"}>Contacts</Link>
          </HeaderLink>
        </HeaderLinksContainer>
      </HeaderContainer>
    </div>
  );
}
