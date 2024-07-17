"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import useScrollListener from "./useScrollListener";
import Link from "next/link";

const HeaderContainer = styled.div`
  letter-spacing: 5px;
  font-size: 0.8rem;
  font-weight: 500;
  position: fixed;
  width: 100%;
  text-align: -webkit-center;
`;

const HeaderLinksContainer = styled.div`
  text-align: center;
  width: 50%;
  display: flex;
`;
const HeaderLink = styled.div`
  width: 25%;
  cursor: pointer;
  padding: 20px;
  &:hover {
    color: gray;
  }
`;

export default function Header() {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);
  return (
    <>
      <div className={`headerContainer ${navClassList.join(" ")}`}>
        <HeaderContainer>
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
    </>
  );
}
