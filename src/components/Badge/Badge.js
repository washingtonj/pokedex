import React from "react";
import { Badge } from "./Badge.styles";
import { Colors } from "../../styles/Colors";
import Types from "../../assets/icons/types";

export default function Badges({ style, type, ...props  }) {
  const defaultProps = {
    fill: Colors.text.white,
    style: { width: 15, height: 15, marginRight: 5 },
  };

  function setIcon() {
    switch (type) {
      case "bug":
        return <Types.bug {...defaultProps} />;
      case "dark":
        return <Types.dark {...defaultProps} />;
      case "dragon":
        return <Types.dragon {...defaultProps} />;
      case "electric":
        return <Types.electric {...defaultProps} />;
      case "fairy":
        return <Types.fairy {...defaultProps} />;
      case "fighting":
        return <Types.fighting {...defaultProps} />;
      case "fire":
        return <Types.fire {...defaultProps} />;
      case "flying":
        return <Types.flying {...defaultProps} />;
      case "ghost":
        return <Types.ghost {...defaultProps} />;
      case "grass":
        return <Types.grass {...defaultProps} />;
      case "ground":
        return <Types.ground {...defaultProps} />;
      case "ice":
        return <Types.ice {...defaultProps} />;
      case "normal":
        return <Types.normal {...defaultProps} />;
      case "poison":
        return <Types.poison {...defaultProps} />;
      case "psychic":
        return <Types.psychic {...defaultProps} />;
      case "rock":
        return <Types.rock {...defaultProps} />;
      case "steel":
        return <Types.steel {...defaultProps} />;
      case "water":
        return <Types.water {...defaultProps} />;
      default:
        return <></>;
    }
  }

  return (
    <Badge.Container style={style} type={type} {...props}>
      {setIcon()}
      <Badge.Title children={type} />
    </Badge.Container>
  );
}

Badges.defaultProps = {
  type: null
}