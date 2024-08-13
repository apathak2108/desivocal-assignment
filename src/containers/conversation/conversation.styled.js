import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
`;

export const StyledConversationContainer = styled.main`
  display: flex;
  padding: 24px;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

export const StyledErrorMessage = styled.span`
  display: flex;
  width: 100%;
  margin-top: 48px;
  align-items: center;
  justify-content: center;
`;
