import styled from "styled-components/native";
import { Colors } from "../../styles/Colors";
import {
  FilterTitle,
  ApplicationTitle,
  Description,
  PokemonType,
} from "../../styles/Typography";
import { Image } from "react-native-animatable";
import { View } from "react-native-animatable";
import BackgroundImage from "../../assets/icons/generics/about-bg.png";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ type }) => Colors[type].bg};
  padding: 20px 0 0 0;
`;

export const NavigatorHeader = {
  Container: styled.View`
    flex-direction: row;
    height: 35px;
    margin-top: 30px;
    padding: 0 20px;
    align-items: center;
  `,

  Button: styled.TouchableOpacity`
    width: 30px;
  `,
};

export const Pokemon = {
  Container: styled.ImageBackground.attrs({
    source: BackgroundImage,
    imageStyle: { resizeMode: "cover", position: "absolute", left: 50 },
  })`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 80px;
  `,

  Wrapper: styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,

  Image: styled(Image).attrs({
    animation: "fadeInLeft",
  })`
    width: 125px;
    height: 125px;
    margin-right: 25px;
  `,

  Id: styled(FilterTitle).attrs({
    animation: "lightSpeedIn",
    duration: 1000,
  })`
    color: ${Colors.text.number};
  `,

  Name: styled(ApplicationTitle).attrs({
    animation: "lightSpeedIn",
    duration: 1100,
  })`
    color: ${Colors.text.white};
    margin-bottom: 8px;
  `,
};

export const PokemonStates = {
  Container: styled(View).attrs({
    animation: "fadeInUp",
  })`
    background: white;
    flex: 1;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    padding: 40px;
  `,

  Description: styled(Description)`
    color: ${Colors.text.gray};
  `,

  Title: styled(FilterTitle)`
    color: ${(props) => Colors[props.color].type};
    margin-bottom: 16px;
  `,

  Stats: {
    Container: styled.View`
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 16px;
    `,

    Title: styled(PokemonType)`
      width: 35%;
    `,

    Value: styled(Description)`
      color: ${Colors.text.gray};
    `,
  },
};
