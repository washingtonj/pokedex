import React from "react";
import { Container, NavigatorHeader, Pokemon } from "./About.styles";
import BackIcon from "../../assets/icons/generics/back.svg";
import { Column, Row } from "../../styles/Container";
import { Badge } from "../../components";

export default function About({ navigation, route }) {
  const pokemon = route.params.pokemon;

  console.log(pokemon);

  return (
    <Container type={pokemon.types[0].toLowerCase()}>
      <NavigatorHeader.Container>
        <NavigatorHeader.Button onPress={() => navigation.goBack()}>
          <BackIcon fill="white" width="25" height="25" />
        </NavigatorHeader.Button>
      </NavigatorHeader.Container>

      <Pokemon.Container>
        <Pokemon.Image
          source={{
            uri: pokemon.sprite,
          }}
        />
        <Column>
          <Pokemon.Id children={`#00${pokemon.number}`} />
          <Pokemon.Name children={pokemon.name} />
          <Row>
            {pokemon.types.map((type) => (
              <Badge
                animation="rubberBand"
                duration={2500}
                iterationCount={1}
                key={type}
                type={type.toLowerCase()}
                style={{ marginRight: 8 }}
              />
            ))}
          </Row>
        </Column>
      </Pokemon.Container>
    </Container>
  );
}
