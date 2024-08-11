import styled from "styled-components";

export const StyledSmallCard = styled.div`
  height: 220px;
  width: 190px;
  border: 2px solid grey;
  border-radius: 4px;
  margin: 20px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const StyledSmallCardImage = styled.img`
  height: 100%;
  border-radius: 4px;
  width: 100%;
  object-fit: cover;
`;

export const StyledCharacterName = styled.span`
  width: 100%;
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  z-index: 2;
  text-indent: 6px;
`;

export const FadedBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 100%
  );
  z-index: 1;
`;
