import React from "react";
import { Badge } from "./Badge.styles";
import { Colors } from "../../styles/Colors";
import Types from "../../assets/icons/types";

export default function Badges({ style, type  }) {
  const props = {
    fill: Colors.text.white,
    style: { width: 15, height: 15, marginRight: 5 },
  };

  function setIcon() {
    switch (type) {
      case "bug":
        return <Types.bug {...props} />;
      case "dark":
        return <Types.dark {...props} />;
      case "dragon":
        return <Types.dragon {...props} />;
      case "electric":
        return <Types.electric {...props} />;
      case "fairy":
        return <Types.fairy {...props} />;
      case "fighting":
        return <Types.fighting {...props} />;
      case "fire":
        return <Types.fire {...props} />;
      case "flying":
        return <Types.flying {...props} />;
      case "ghost":
        return <Types.ghost {...props} />;
      case "grass":
        return <Types.grass {...props} />;
      case "ground":
        return <Types.ground {...props} />;
      case "ice":
        return <Types.ice {...props} />;
      case "normal":
        return <Types.normal {...props} />;
      case "poison":
        return <Types.poison {...props} />;
      case "psychic":
        return <Types.psychic {...props} />;
      case "rock":
        return <Types.rock {...props} />;
      case "steel":
        return <Types.steel {...props} />;
      case "water":
        return <Types.water {...props} />;
      default:
        return <></>;
    }
  }

  return (
    <Badge.Container style={style} type={type}>
      {setIcon()}
      <Badge.Title children={type} />
    </Badge.Container>
  );
}

Badges.defaultProps = {
  type: null
}