import styled from "styled-components";
import { PokemonType } from "../../styles/Typography";
import { Colors } from "../../styles/Colors";
import Types from "../../assets/icons/types";

export const Badge = {
  Container: styled.View`
    flex-direction: row;
    padding: 5px;
    background: ${({ type }) => (type ? Colors[type].type : "transparent")};
    border-radius: 5px;
  `,

  Title: styled(PokemonType)`
    color: ${Colors.text.white};
    text-transform: capitalize;
  `,
};
