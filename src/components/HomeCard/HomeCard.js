import React from "react";
import PropTypes from "prop-types";
import { Card } from "./HomeCard.styles";
import { Column } from "../../styles/Container";
import Badge from "../Badge/Badge";

export default function HomeCard({ style, id, name, types, avatar }) {
  return (
    <Card.Container style={style} type={types[0]}>
      <Card.Background>
        <Column>
          <Card.Id children={`#00${id}`} />
          <Card.Name children={name} />
          <Card.Badges.Container>
            {types.map((type) => (
              <Badge key={type} type={type} style={{ marginRight: 8 }} />
            ))}
          </Card.Badges.Container>
        </Column>
        <Column fluid>
          <Card.Avatar
            source={{
              uri: avatar,
            }}
          />
        </Column>
      </Card.Background>
    </Card.Container>
  );
}

HomeCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number ]),
  name: PropTypes.string,
  types: PropTypes.array,
  avatar: PropTypes.string,
};

HomeCard.defaultProps = {
  id: 1,
  name: "Bulbasour",
  types: ["grass", "poison"],
  avatar: "https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png",
};
