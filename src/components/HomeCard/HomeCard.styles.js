import styled from "styled-components/native";
import { Colors } from "../../styles/Colors";
import { PokemonName, PokemonNumber } from "../../styles/Typography";
import bgimage from "../../assets/icons/generics/bgcard.png";
import { View } from "react-native-animatable";

export const Card = {
  Container: styled(View).attrs((props) => ({
    animation: "fadeInLeft",
    shadowColor: `${Colors[props.type].bg}`,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6.22,

    // Set Shadow in Android
    // elevation: 3,
  }))`
    height: 115px;
    border-radius: 10px;
    background: ${(props) => Colors[props.type].bg};
    /* box-shadow: 0px 1px 3px ${Colors.grass.bg}; */
  `,

  Wrapper: styled.TouchableOpacity`
    height: 100%;
  `,

  Background: styled.ImageBackground.attrs({
    source: bgimage,
    imageStyle: { resizeMode: "cover", position: "absolute", left: 100 },
  })`
    flex: 1;
    height: 100%;
    align-items: center;
    flex-direction: row;
    padding: 0 25px;
  `,

  Id: styled(PokemonNumber)`
    color: ${Colors.text.number};
  `,

  Name: styled(PokemonName)`
    color: ${Colors.text.white};
  `,

  Badges: {
    Container: styled.View`
      flex-direction: row;
      margin-top: 4px;
    `,
  },

  Avatar: styled.Image`
    width: 130px;
    height: 130px;
    position: absolute;
    bottom: -45px;
    right: -10px;
  `,
};
