import React from "react";
import {
  StyledButton2,
  StyledCharacterImage,
  StyledCharacterImageContainer,
  StyledCharacterSpeechText,
  StyledConversationCardContainer,
  StyledMain,
} from "./conversationCard.styled";
import { STRINGS } from "../../constants";

const ConversationCard = ({ image, message, onInput, value }) => {
  return (
    <StyledMain>
      <StyledConversationCardContainer>
        <StyledCharacterImageContainer>
          <StyledCharacterImage src={image} />
        </StyledCharacterImageContainer>
        <StyledCharacterSpeechText
          contentEditable
          onInput={onInput}
          dangerouslySetInnerHTML={{ __html: value }}
        >
          {message}
        </StyledCharacterSpeechText>
      </StyledConversationCardContainer>
      <StyledButton2>{STRINGS.START}</StyledButton2>
    </StyledMain>
  );
};

export default ConversationCard;
