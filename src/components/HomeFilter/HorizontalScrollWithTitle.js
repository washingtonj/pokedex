import React from "react";
import styled from "styled-components/native";
import { Colors } from "../../styles/Colors";
import { FilterTitle } from "../../styles/Typography";

// React Component
const HorizontalScrollWithTitle = ({ title, items, selecteds, onSelect }) => (
  <Styled.Container>
    <Styled.Title children={title} />
    <Styled.Scrolling>
      {items.map((item) => (
        <Styled.Item
          key={item.id}
          onPress={() => onSelect(item.id, "type")}
          color={selecteds.includes(item.id) && item.color}
        >
          <item.icon
            fill={selecteds.includes(item.id) ? "white" : item.color}
            width="25"
            height="25"
          />
        </Styled.Item>
      ))}
    </Styled.Scrolling>
  </Styled.Container>
);

// Styles
const Styled = {
  Container: styled.View`
    margin-top: 24px;
  `,

  Title: styled(FilterTitle)`
    color: ${Colors.text.black};
    margin-bottom: 16px;
  `,

  Item: styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 16px;
    justify-content: center;
    align-items: center;
    background: ${({ color }) => (color ? color : "transparent")};
  `,

  Scrolling: styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true,
  })`
    flex-direction: row;
    width: 100%;
  `,
};

export default HorizontalScrollWithTitle;
