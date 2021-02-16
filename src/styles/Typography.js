import styled from "styled-components/native";
import { Text } from "react-native-animatable";

export const Title = styled(Text).attrs((props) => ({
  ...props,
}))`
  font-size: 100px;
  font-weight: bold;
`;

export const ApplicationTitle = styled(Text).attrs((props) => ({
  ...props,
}))`
  font-size: 32px;
  font-weight: bold;
`;

export const PokemonName = styled(Text).attrs((props) => ({
  ...props,
}))`
  font-size: 26px;
  font-weight: bold;
`;

export const FilterTitle = styled(Text).attrs((props) => ({
  ...props,
}))`
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled(Text).attrs((props) => ({
  ...props,
}))`
  font-size: 16px;
  font-weight: normal;
`;

export const PokemonNumber = styled(Text).attrs((props) => ({
  ...props,
}))`
  font-size: 12px;
  font-weight: bold;
`;

export const PokemonType = styled(Text).attrs((props) => ({
  ...props,
}))`
  font-size: 12px;
  font-weight: 400;
`;
