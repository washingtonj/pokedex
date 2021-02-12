import styled from "styled-components/native";
import { ApplicationTitle, Description } from "../../styles/Typography";
import { Colors } from "../../styles/Colors";
import SearchIco from "../../assets/icons/generics/search.svg";
import LoaderIco from "../../assets/icons/generics/pokeball.svg";
import { View } from 'react-native-animatable'

export const Container = styled.View`
  background: white;
  margin: 50px 25px;
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
    animation: 'rubberBand',
    iterationCount: "infinite"
  })`
  
  `,

  Icon: styled(LoaderIco).attrs({
    fill: '#000'
  })`
    width: 35px;
    height: 35px;
    margin-bottom: 10px;
  `,

  Message: styled.Text`
    font-size: 13px;
  `

};
