import React from "react";
import {
  FadedBackground,
  StyledCharacterName,
  StyledSmallCard,
  StyledSmallCardImage,
} from "./characterCard";

const CharacterCard = ({ source, name }) => {
  return (
    <StyledSmallCard>
      <StyledSmallCardImage src={source} alt={name} />
      <FadedBackground />
      <StyledCharacterName>{name}</StyledCharacterName>
    </StyledSmallCard>
  );
};

export default CharacterCard;
