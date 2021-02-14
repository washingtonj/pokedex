import styled from "styled-components/native";

// Utils
// import { StatusBar } from 'react-native'

// UI Components
import { ApplicationTitle, Description } from "../../styles/Typography";
import { Colors } from "../../styles/Colors";
import { Container as MarginContainer } from '../../styles/Container'

// Animated Components
import { View } from "react-native-animatable";

// Other Icons
import SearchIco from "../../assets/icons/generics/search.svg";
import Pokeball from "../../assets/icons/generics/pokeball.png"

// Loader Icons
import LoaderIco from "../../assets/icons/generics/pokeball.svg";

// Filter Icons
import SortIco from "../../assets/icons/generics/sort.svg";
import FilterIco from "../../assets/icons/generics/filter.svg";
import GenerationIco from "../../assets/icons/generics/generation.svg";

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const Wrapper = styled(MarginContainer)`

`;

export const PokeballBackground = styled.ImageBackground.attrs({
  source: Pokeball,
  imageStyle: { resizeMode: "cover", position: "absolute" },
})`
  width: 100%;
`

export const Navbar = {
  Container: styled.View`
    flex-direction: row;
    height: 50px;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 15px;
  `,

  Generation: styled(GenerationIco).attrs({
    fill: "black",
  })`
    width: 25px;
    height: 25px;
    margin-right: 10px;
  `,

  Sort: styled(SortIco).attrs({
    fill: "black",
  })`
    width: 25px;
    height: 25px;
    margin-right: 10px
  `,

  Filter: styled(FilterIco).attrs({
    fill: "black",
  })`
    width: 25px;
    height: 25px;
  `,


};

export const Welcome = {
  Container: styled.View``,

  Title: styled(ApplicationTitle)`
    color: black;
  `,

  Description: styled(Description)`
    color: ${Colors.text.gray};
    margin-top: 10px;
  `,
};

export const SearchBar = {
  Container: styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60px;
    background: ${Colors.input.default};
    border-radius: 5px;
    margin-top: 30px;
    padding: 0 15px;
  `,

  Icon: styled(SearchIco).attrs({
    fill: Colors.text.gray,
  })`
    width: 20px;
    height: 20px;
    margin-right: 15px;
  `,

  Input: styled.TextInput.attrs({
    selectionColor: Colors.psychic.type,
    placeholderTextColor: Colors.text.gray,
  })`
    width: 100%;
    height: 100%;
    font-size: 16px;
  `,
};

export const ItemList = {
  Container: styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
  })`
    margin-top: 30px;
    margin-bottom: 100px;
    paddingHorizontal: 5px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  `,

  Scrolling: styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
  `,
};

export const Loader = {
  Container: styled.View`
    margin-top: 80px;
    align-items: center;
  `,

  Animated: styled(View).attrs({
    animation: "rubberBand",
    iterationCount: "infinite",
  })``,

  Icon: styled(LoaderIco).attrs({
    fill: "#000",
  })`
    width: 35px;
    height: 35px;
    margin-bottom: 10px;
  `,

  Message: styled.Text`
    font-size: 13px;
  `,
};
