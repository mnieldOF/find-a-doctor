import React from "react";
import styled from "@emotion/styled";
import { TextStyled, Container } from "@phlo/component-library";
import { useParams } from "@reach/router";

const StyledContainer = styled(Container)`
  ul {
    list-style: none;
    li {
      margin-bottom: 5px;
    }
  }
`;

export default function BookingConfirmation() {
  const params = useParams();
  const appointmentDetails = JSON.parse(params.appointment);
  const { doctor, address, date, time, name, email, nhs } = appointmentDetails;
  return (
    <StyledContainer>
      <TextStyled color="#000" as="h1">
        Appointment confirmed!
      </TextStyled>
      <TextStyled color="#000">
        We are delighted to confirm your appointment with{" "}
        <strong>{doctor}</strong>
      </TextStyled>
      <TextStyled color="#000">
        Your appointment will take place at the following address:<br></br>
        <strong>{address}</strong>
      </TextStyled>
      <ul>
        <li>
          Date: <strong>{date}</strong>
        </li>
        <li>
          Time: <strong>{time}</strong>
        </li>
      </ul>
      <TextStyled color="#000">Please find your details below:</TextStyled>
      <ul>
        <li>
          name: <strong>{name}</strong>
        </li>
        <li>
          email: <strong>{email}</strong>
        </li>
        {nhs ? (
          <li>
            NHS number: <strong>{nhs}</strong>
          </li>
        ) : null}
      </ul>
      Please click <a href="/">here</a> to return to the home page
    </StyledContainer>
  );
}
