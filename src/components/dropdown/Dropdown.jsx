"use client";

import { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

export const DropdownContainer = styled.div`
  width: 50%;
  margin: 10px;
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: left;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  padding: 10px;
  border: 1px solid #ddd;
  border-top: none;
  background-color: #f8f8f8;
  border-radius: 0 0 4px 4px;
`;

export default function Dropdown({ title, children }) {
  const [show, setShow] = useState(false);

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setShow(!show)}>{title}</DropdownButton>
      <DropdownContent show={show}>{children}</DropdownContent>
    </DropdownContainer>
  );
}
