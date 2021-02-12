import styled from "styled-components/native";

export const Row = styled.View`
  flex: ${(props) => (props.fluid ? 1 : 'auto')};
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
`;

export const Column = styled.View`
  flex: ${(props) => (props.fluid ? 1 : 'auto')};
  flex-direction: ${(props) => (props.reverse ? "column-reserve" : "column")};
`;
