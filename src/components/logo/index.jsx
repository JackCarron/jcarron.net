import React from "react";
import styled, { css } from "styled-components";

import JCLogo from "../../assets/logo/logo_croped.png";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  font-color: #00fff5;
  padding: 20px;
  width: 100px;
  height: 100px;
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "23px" : "40px"};
  color: ${({ inline }) => (inline ? "#fff" : theme.primary)};
  font-weight: 900;
  padding: 10px;
`;


export function Logo(props) {
  const { inline, small } = props;

  let logoTxtString = 'J.C.';

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoText style={{color: "#00fff5"}} inline={inline} small={small}>{logoTxtString}</LogoText>
      <LogoText style={{color: "#00fff5"}}inline={inline} small={small}>
        Jack Carron
      </LogoText>
    </LogoContainer>
  );
}
