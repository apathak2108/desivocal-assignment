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

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderSectionOne>{STRINGS.HEADER_TEXT}</StyledHeaderSectionOne>
      <StyledHeaderSectionTwo>
        <StyledLogoIcon src={Logo} alt="desivocal-logo" />
        <StyledLogoText>{STRINGS.DESIVOCAL}</StyledLogoText>
      </StyledHeaderSectionTwo>
    </StyledHeader>
  );
};

export default Header;
