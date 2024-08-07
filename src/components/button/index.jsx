import React from "react";
import { StyledButton } from "./button.styled";

const Button = (onClick, label) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
