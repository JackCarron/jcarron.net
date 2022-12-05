import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "23px" : "40px"};
  color: ${theme.primary};
  font-weight: 900;
  padding: 10px;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
`;

const logoDivStyle = {
  "backgroundColor": theme.nuetral,
  "borderRadius": "10%",
  "textDecoration": "none"
};

export function Logo(props) {
  const { inline, small } = props;
  
  return (
    <LogoContainer inline={inline} small={small}>
      <a id="MainLogo" href={window.location.origin} style={logoDivStyle}>
      <LogoText inline={inline} small={small}>JC.</LogoText>
      </a>
    </LogoContainer>
  );
}
