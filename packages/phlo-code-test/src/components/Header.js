import React from "react";
import { Link } from "@reach/router";
import Logo from "../assets/phlo-logo.png";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  background: #1c1c3b;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin-left: 20px;
    max-width: 80px;
  }
  ul {
    list-style: none;
    display: flex;
    margin-right: 20px;
    li {
      margin-left: 20px;
    }
    a {
      transition: opacity 0.3s ease-in-out;
      text-decoration: none;
      font-size: 15px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#ea2866" : "#68c3ca",
          fontWeight: isCurrent ? "bold" : "normal",
        },
      };
    }}
  />
);

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={Logo} alt="phlo" />
      </Link>
      <ul>
        <li>
          <NavLink to="/">Find a doctor</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/care-plans">Care plans</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/emergency">Emergency</NavLink>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
