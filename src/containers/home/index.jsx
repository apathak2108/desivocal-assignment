import React from "react";
import {
  StyledButton1,
  StyledCharactersContainer,
  StyledCharactersSelectionContainer,
  StyledCharactersSelectionText,
  StyledHomeLayout,
} from "./home.styled";
import CharacterCard from "../../components/characterCard";
import { characters } from "../../constants/index";
import Button from "../../components/button";

const HomeContainer = () => {
  return (
    <StyledHomeLayout>
      <StyledCharactersContainer>
        {characters.map((character, index) => {
          return (
            <CharacterCard key={index} source={character.character} name={character.name} />
          );
        })}
      </StyledCharactersContainer>
      <StyledCharactersSelectionContainer>
        <StyledCharactersSelectionText>
          Select two characters to start the conversation
        </StyledCharactersSelectionText>
        <StyledButton1>Start Conversation</StyledButton1>
      </StyledCharactersSelectionContainer>
    </StyledHomeLayout>
  );
};

export default HomeContainer;
