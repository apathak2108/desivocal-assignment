import styled from "styled-components";
import { StyledButton } from "../../components/button/button.styled";

export const StyledHomeLayout = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 24px;
`;

export const StyledCharactersContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  flex-wrap: wrap;
`;

export const StyledCharactersSelectionContainer = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 24px;
`;

export const StyledCharactersSelectionText = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

export const StyledButton1 = styled(StyledButton)``;
