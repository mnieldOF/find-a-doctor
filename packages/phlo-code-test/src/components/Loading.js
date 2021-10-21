import React from "react";
import styled from "@emotion/styled";

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
  width: 100%;
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loading() {
  return (
    <LoadingSpinner>
      <div class="lds-dual-ring"></div>
    </LoadingSpinner>
  );
}
