import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 104px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid grey;
  top: 0;
  z-index: 1;
`;

export const StyledHeaderSectionOne = styled.section`
  height: 40px;
  background: linear-gradient(135deg, #ab40ff, #4d5eff);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeaderSectionTwo = styled.section`
  height: 64px;
  display: flex;
  padding: 0 32px;
  gap: 8px;
  align-items: center;
`;

export const StyledHeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledLogoIcon = styled.img`
  cursor: pointer;
`;

export const StyledLogoText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 8px;
`;
