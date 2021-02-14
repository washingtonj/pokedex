import styled from "styled-components";

// UI Components
import { Modal } from "../../styles/Container";
import { Description, PokemonName } from "../../styles/Typography";
import { Colors } from "../../styles/Colors";

export const Container = styled(Modal)`
  justify-content: center;
  align-items: center;
`;

export const Filter = {
  Container: styled.View`
    width: 95%;
    background: white;
    /* border-top-left-radius: 30px;
    border-top-right-radius: 30px; */

    border-radius: 30px;
    padding: 30px;
  `,

  Title: styled(PokemonName)`
    color: ${Colors.text.black};
    margin-bottom: 8px;
  `,

  Description: styled(Description)`
    color: ${Colors.text.gray};
  `,
};


export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 35px;
`;

