import React from "react";
import PropTypes from "prop-types";
import { Button as StyledButton } from "./Button.styles";

export default function Button({ title, style, onPress }) {
  return (
    <StyledButton.Container style={style}>
      <StyledButton.Wrapper onPress={onPress}>
        <StyledButton.Title children={title} />
      </StyledButton.Wrapper>
    </StyledButton.Container>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
};
