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
        We are delighted to confirm your app with <strong>{doctor}</strong>
      </TextStyled>
      <TextStyled color="#000">
        Your appointment will take place at the following address:
        <strong>{address}</strong>,<strong>date: {date}</strong>,
        <strong>time: {time}</strong>,
      </TextStyled>
      <TextStyled color="#000">Please find your details below:</TextStyled>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        {nhs ? <li>{nhs}</li> : null}
      </ul>
      Please click <a href="/">here</a> to return to the home page
    </StyledContainer>
  );
}
