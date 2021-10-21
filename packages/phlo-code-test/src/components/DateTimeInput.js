import React from "react";
import styled from "@emotion/styled";

const DateTime = styled.div`
  display: flex;
  border: 1px solid #000;
  border-radius: 4px;
  background: transparent;
  input {
    border: 0px;
    background: transparent;
    flex: 2;
    border-right: 1px solid #000;
    padding: 5px;
    border-radius: 0px;
    &:nth-of-type(2) {
      flex: 1;
      border-right: 0px;
    }
  }
`;

export default function DateTimeInput({ label, ...props }) {
  return (
    <>
      <label htmlFor={props.id || props.name}>
        {label}
        {props.required ? "*" : null}
      </label>
      <DateTime>
        <input type="date" />
        <input type="time" />
      </DateTime>
    </>
  );
}
