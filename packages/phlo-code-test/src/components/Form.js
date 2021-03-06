import React from "react";
import styled from "@emotion/styled";
import { navigate } from "@reach/router";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./text-input";
import { TextStyled, theme } from "@phlo/component-library";

const StyledForm = styled.div`
  width: 750px;
  display: flex;
  box-shadow: 2px 2px 13px 6px rgba(0, 0, 0, 0.17);
  .left,
  .right {
    flex: 1;
    padding: 30px;
  }
  .right {
    background: #eee;
  }
  .left {
    background: ${theme.colors.white};
    overflow: hidden;
  }
  .flex {
    display: flex;
    flex-direction: column;
    a {
      color: ${theme.colors.black};
      font-size: ${theme.fontSizes[1] + "px"};
      margin-bottom: ${theme.space[3] + "px"};
      transition: opacity 0.3s ease-in-out;
      font-weight: bold;
      display: block;
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  .form-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    label {
      font-size: 14px;
      margin-bottom: 4px;
    }
    .date-time {
      display: flex;
      border: 1px solid #000;
      border-radius: 4px;
      background: transparent;
      position: relative;
      margin-top: 30px;
      margin-bottom: 10px;
      label {
        position: absolute;
        top: -25px;
        left: 0;
      }
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
      #error {
        position: absolute;
        bottom: -20px;
        left: 0;
      }
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 15px;
    text-transform: uppercase;
    font-weight: bold;
    background: black;
    color: white;
    border: 0px;
    transition: opacity 0.3s ease-in-out;
    font-size: 13px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    &[disabled] {
      background: grey;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

const ContactForm = ({ doctor, close }) => {
  const validationSchema = Yup.object().shape({
    date: Yup.date().required("Please pick a date"),
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <StyledForm>
      <div className="left">
        <TextStyled
          as="h3"
          color={theme.colors.black}
          margin="0"
          fontWeight="bold"
          fontSize="30px"
        >
          Book an appointment
        </TextStyled>
        <TextStyled fontSize="16px">Booking with...</TextStyled>
        <TextStyled color={theme.colors.black} fontSize={theme.fontSizes[1]}>
          {doctor.name}
        </TextStyled>
        <TextStyled color={theme.colors.black} fontSize={theme.fontSizes[1]}>
          {doctor.address}
        </TextStyled>
        <div className="flex">
          <a className="website" href={doctor.website}>
            {doctor.website}
          </a>
          <a className="telephone" href={`tel:${doctor.phone_number}`}>
            {doctor.phone_number}
          </a>
        </div>
      </div>
      <div className="right">
        <TextStyled color={theme.colors.black} margin="10px 0" fontSize="14px">
          Please fill out the form below to complete your appointment
        </TextStyled>
        <Formik
          initialValues={{
            doctor: doctor.name,
            address: doctor.address,
            date: "",
            time: "",
            name: "",
            email: "",
            nhs: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const newValues = JSON.stringify(values);
            navigate(`/appointment-confirmation/${newValues}`);
            close(false);
          }}
        >
          {({ isSubmitting, dirty, isValid }) => (
            <Form className="form">
              <div className="inner">
                <div className="form-field">
                  <div className="date-time">
                    <MyTextInput
                      label="Please select your date and time"
                      name="date"
                      type="date"
                      required
                    />
                    <MyTextInput name="time" type="time" />
                  </div>
                </div>
                <div className="form-field">
                  <MyTextInput
                    label="Full name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-field">
                  <MyTextInput
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="form-field">
                  <MyTextInput
                    label={`NHS number (optional)`}
                    name="nhs"
                    type="number"
                    placeholder="This is the 10-digit number unique to you"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!dirty || isSubmitting || !isValid}
                >
                  Book appointment
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </StyledForm>
  );
};

export default ContactForm;
