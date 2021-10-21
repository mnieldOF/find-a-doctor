import React from "react";
import styled from "@emotion/styled";
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
      font-size: 16px;
      margin-bottom: 4px;
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

const ContactForm = ({ doctor }) => {
  const validationSchema = Yup.object().shape({
    date: Yup.date().required("Please pick a date"),
    time: Yup.string().required("Please pick a time"),
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
            date: "",
            time: "",
            name: "",
            email: "",
            nhs: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting, dirty, isValid }) => (
            <Form className="form">
              <div className="inner">
                <div className="form-field">
                  <input type="date" />
                  <input type="time" />
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
