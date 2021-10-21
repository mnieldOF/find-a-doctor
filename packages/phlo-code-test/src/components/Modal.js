import React from "react";
import ReactDom from "react-dom";
import styled from "@emotion/styled";
import Close from "../assets/close.svg";
import { rgba } from "polished";

const StyledModal = styled.div`
  position: fixed;
`;

const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  top: 10px;
  right: 10px;
  border: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  img {
    display: block;
    width: 14px;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${rgba("#eee", 0.9)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Modal({ close, open, children }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <Overlay>
      <CloseButton onClick={() => close(false)}>
        <img src={Close} alt="close button" />
      </CloseButton>
      <StyledModal>{children}</StyledModal>
    </Overlay>,
    document.getElementById("portal")
  );
}
