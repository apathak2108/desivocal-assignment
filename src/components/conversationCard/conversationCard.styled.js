import styled from "styled-components";
import { StyledButton } from "../button/button.styled";

export const StyledMain = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 22px;
`;
export const StyledConversationCardContainer = styled.div`
  display: flex;
  border: 2px solid grey;
  border-radius: 8px;
  margin: 40px 10px 0 10px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

export const StyledCharacterImageContainer = styled.section`
  height: 220px;
  width: 190px;

  @media (max-width: 768px) {
    min-width: 190px;
    width: 100%;
  }
`;

export const StyledCharacterImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px 0 0 8px;

  @media (max-width: 768px) {
    object-fit: fill;
  }
`;

export const StyledCharacterSpeechText = styled.section`
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
  max-width: 300px;
  height: 204px;
  line-height: 24px;
  overflow-y: scroll;
`;

export const StyledButton2 = styled(StyledButton)``;
