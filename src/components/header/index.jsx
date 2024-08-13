import React from "react";
import {
  StyledHeader,
  StyledHeaderSectionOne,
  StyledHeaderSectionTwo,
  StyledLogoIcon,
  StyledLogoText,
} from "./header.styled";
import { STRINGS } from "../../constants";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledHeaderSectionOne onClick={navigate("/")}>
        {STRINGS.HEADER_TEXT}
      </StyledHeaderSectionOne>
      <StyledHeaderSectionTwo>
        <StyledLogoIcon
          src={Logo}
          alt="desivocal-logo"
          onClick={() => navigate("/")}
        />
        <StyledLogoText onClick={() => navigate("/")}>{STRINGS.DESIVOCAL}</StyledLogoText>
      </StyledHeaderSectionTwo>
    </StyledHeader>
  );
};

export default Header;
