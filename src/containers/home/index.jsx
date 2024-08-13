import React, { useState } from "react";
import {
  StyledButton1,
  StyledCharactersContainer,
  StyledCharactersSelectionContainer,
  StyledCharactersSelectionText,
  StyledHomeLayout,
} from "./home.styled";
import CharacterCard from "../../components/characterCard";
import { characters, STRINGS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCharacters } from "../../redux/actions/homeActions";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCharacterOne, setSelectedCharacterOne] = useState(null);
  const [selectedCharacterTwo, setSelectedCharacterTwo] = useState(null);

  const handleCharacterClick = (character, index) => {
    if (!selectedCharacterOne) {
      setSelectedCharacterOne({ character, index });
    } else if (!selectedCharacterTwo) {
      setSelectedCharacterTwo({ character, index });
    }
  };

  const handleStartConversation = () => {
    if (selectedCharacterOne && selectedCharacterTwo) {
      dispatch(
        setSelectedCharacters(
          selectedCharacterOne.character.name,
          selectedCharacterTwo.character.name
        )
      );
      navigate("/conversation");
    }
  };

  const isCharacterDisabled = (index) => {
    return (
      (selectedCharacterOne && selectedCharacterOne.index === index) ||
      (selectedCharacterTwo && selectedCharacterTwo.index === index) ||
      (selectedCharacterOne && selectedCharacterTwo)
    );
  };

  return (
    <StyledHomeLayout>
      <StyledCharactersContainer>
        {characters.map((character, index) => {
          const isSelected =
            (selectedCharacterOne && selectedCharacterOne.index === index) ||
            (selectedCharacterTwo && selectedCharacterTwo.index === index);
          return (
            <CharacterCard
              key={index}
              source={character.character}
              name={character.name}
              isSelected={isSelected}
              onClick={() => handleCharacterClick(character, index)}
              disabled={isCharacterDisabled(index)}
            />
          );
        })}
      </StyledCharactersContainer>
      <StyledCharactersSelectionContainer>
        <StyledCharactersSelectionText>
          {STRINGS.HOME_CHARACTERS_SELECTION_TEXT}
        </StyledCharactersSelectionText>
        <StyledButton1
          disabled={!selectedCharacterOne || !selectedCharacterTwo}
          onClick={handleStartConversation}
        >
          {STRINGS.HOME_BTN_TEXT}
        </StyledButton1>
      </StyledCharactersSelectionContainer>
    </StyledHomeLayout>
  );
};

export default HomeContainer;
