import React from "react";
import styled from "@emotion/styled";
import DoctorImg from "../assets/doctor.svg";
import { TextStyled, theme } from "@phlo/component-library";
import Close from "../assets/close.svg";

const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  top: 10px;
  right: 10px;
  border: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #000;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  img {
    display: block;
    width: 10px;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
`;

const StyledPin = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #000;
  background: #fff;
  position: relative;
  img {
    width: 40%;
  }
  &:hover {
    cursor: pointer;
  }
  .doctor-info {
    flex-direction: column;
    width: 200px;
    height: 200px;
    position: absolute;
    left: 150%;
    background: white;
    padding: 15px;
    z-index: 100;
    box-shadow: 2px 2px 13px 6px rgba(0, 0, 0, 0.17);
    display: none;
    &.show {
      display: flex;
    }
    &.hidden {
      display: none;
    }
    .telephone,
    .website {
      color: #000;
      margin-top: 10px;
      display: block;
      font-weight: 600;
      transition: opacity 0.3s ease-in-out;
      &:hover {
        opacity: 0.5;
      }
    }
    .cta-button {
      margin-top: auto;
      width: 100%;
      display: block;
      text-transform: uppercase;
      background: #000;
      padding: 15px 0;
      text-align: center;
      color: #fff;
      font-weight: bold;
      border: 0px;
      transition: opacity 0.3s ease-in-out;
      font-size: 13px;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
`;

const Doctor = ({ lat, lng, doctor, index, openModal, setSelectedDoctor }) => {
  const [showPin, setShowPin] = React.useState(null);
  return (
    <StyledPin
      lat={lat}
      lng={lng}
      onClick={() => {
        setShowPin(index);
      }}
    >
      <img src={DoctorImg} alt="doctor" />
      {showPin === index ? (
        <div className={`doctor-info ${showPin === index ? "show" : "hidden"}`}>
          <CloseButton onClick={() => setShowPin(false)}>
            <img src={Close} alt="close button" />
          </CloseButton>
          <TextStyled
            as="h4"
            color={theme.colors.black}
            m="0 0 10px"
            fontSize="16px"
            fontWeight="bold"
          >
            {doctor.name}
          </TextStyled>
          <TextStyled color={theme.colors.black} as="h5" fontSize="15px" m="0">
            {doctor.address}
          </TextStyled>
          <a className="website" href={doctor.website}>
            company website
          </a>
          <a className="telephone" href={`tel:${doctor.phone_number}`}>
            {doctor.phone_number}
          </a>
          <button
            className="cta-button"
            onClick={() => {
              openModal(true);
              setSelectedDoctor(doctor);
            }}
          >
            book appointment
          </button>
        </div>
      ) : null}
    </StyledPin>
  );
};

export default Doctor;
