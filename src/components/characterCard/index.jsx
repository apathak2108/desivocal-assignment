import React from "react";
import {
  FadedBackground,
  StyledCharacterName,
  StyledSmallCard,
  StyledSmallCardImage,
} from "./characterCard";

const CharacterCard = ({ source, name, onClick, disabled, isSelected }) => {
  return (
    <StyledSmallCard onClick={onClick} isSelected={isSelected} disabled={disabled}>
      <StyledSmallCardImage src={source} alt={name} />
      <FadedBackground />
      <StyledCharacterName>{name}</StyledCharacterName>
    </StyledSmallCard>
  );
};

export default CharacterCard;
