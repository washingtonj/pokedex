import styled from "styled-components/native";
import { ApplicationTitle, Description } from "../../styles/Typography";
import { Colors } from "../../styles/Colors";

export const Container = styled.View`
  background: white;
  margin: 50px 30px;
`;

export const Welcome = {
  Container: styled.View`
    background: white;
  `,

  Title: styled(ApplicationTitle)`
    color: black;
  `,

  Description: styled(Description)`
    color: ${Colors.text.gray};
    margin-top: 10px;
  `
};


export const SearchBar = {
  Container: styled.View`
    width: 100%;
    height: 60px;
    background: ${Colors.input.default};
    border-radius: 5px;
    margin-top: 30px;
  `,

  Input: styled.TextInput.attrs({
    selectionColor: Colors.psychic.type
  })`
    width: 100%;
    height: 100%;
    font-size: 16px;
  `
}