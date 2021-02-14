import styled from "styled-components/native";

export const Container = styled.View`
  margin: 0 20px;
`

export const Modal = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
`

export const Row = styled.View`
  flex: ${(props) => (props.fluid ? 1 : 'auto')};
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
`;

export const Column = styled.View`
  flex: ${(props) => (props.fluid ? 1 : 'auto')};
  flex-direction: ${(props) => (props.reverse ? "column-reserve" : "column")};
`;
