import React, { useState } from "react";
import {
  StyledConversationContainer,
  StyledErrorMessage,
  StyledMain,
} from "./conversation.styled";
import ConversationCard from "../../components/conversationCard";
import { useDispatch, useSelector } from "react-redux";
import { characters, STRINGS } from "../../constants";

const ConversationContainer = () => {
  const dispatch = useDispatch();
  const characterOne = useSelector((state) => state?.home?.characterOne);
  const characterTwo = useSelector((state) => state?.home?.characterTwo);
  const firstCharacter = characters?.filter(
    (x) => characterOne === x.name
  )?.[0];
  const secondCharacter = characters?.filter(
    (x) => characterTwo === x.name
  )?.[0];
  const [characterOneMessage, setCharacterOneMessage] = useState(
    `${firstCharacter?.conversation}`
  );
  const [characterTwoMessage, setCharacterTwoMessage] = useState(
    `${secondCharacter?.conversation}`
  );

  const handleCharacterOneInputChange = (e) => {
    setCharacterOneMessage(e.target.innerText);
  };

  const handleCharacterTwoInputChange = (e) => {
    setCharacterTwoMessage(e.target.innerText);
  };

  return (
    <StyledMain>
      {characterOne && characterTwo && (
        <StyledConversationContainer>
          <ConversationCard
            image={firstCharacter?.character}
            value={characterOneMessage}
            onInput={handleCharacterOneInputChange}
          />
          <ConversationCard
            image={secondCharacter?.character}
            value={characterTwoMessage}
            onInput={handleCharacterTwoInputChange}
          />
        </StyledConversationContainer>
      )}
      {!characterOne && !characterTwo && (
        <StyledErrorMessage>
          {STRINGS.EMPTY_CHARACTERS_ERROR_MESSAGE}
        </StyledErrorMessage>
      )}
    </StyledMain>
  );
};

export default ConversationContainer;
