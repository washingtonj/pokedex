import styled from "styled-components";
import { PokemonType } from "../../styles/Typography";
import { Colors } from "../../styles/Colors";
import { View } from "react-native-animatable";

export const Badge = {
  Container: styled(View).attrs((props) => ({
    ...props,
  }))`
    flex-direction: row;
    background: ${({ type }) => (type ? Colors[type].type : "transparent")};
    border-radius: 5px;
    height: 25px;
    padding: 0 8px;
    align-items: center;
    justify-content: center;
  `,

  Title: styled(PokemonType)`
    color: ${Colors.text.white};
    text-transform: capitalize;
  `,
};
