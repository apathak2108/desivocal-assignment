import React from "react";
import {
  StyledNotFoundContainer,
  StyledNotFoundHeading,
  StyledNotFoundImage,
  StyledNotFoundTextConatainer,
} from "./404.styled";
import { StyledButton } from "../../components/button/button.styled";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = () => {
  const navigate = useNavigate();

  const handleRedirection = () => {
    navigate("/");
  };

  return (
    <StyledNotFoundContainer>
      <StyledNotFoundImage
        src="https://www.desivocal.com/static/images/others/not_found.svg"
        alt="404-logo"
      />
      <StyledNotFoundTextConatainer>
        <StyledNotFoundHeading>PAGE NOT FOUND</StyledNotFoundHeading>
        <StyledButton onClick={handleRedirection}>
          Back to Home Page
        </StyledButton>
      </StyledNotFoundTextConatainer>
    </StyledNotFoundContainer>
  );
};

export default NotFoundContainer;
