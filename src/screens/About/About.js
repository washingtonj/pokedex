import React from "react";
import {
  Container,
  NavigatorHeader,
  Pokemon,
  PokemonStates,
} from "./About.styles";
import BackIcon from "../../assets/icons/generics/back.svg";
import { Column, Row } from "../../styles/Container";
import { Badge } from "../../components";

const PokemonStateContainer = ({ title, value }) => {
  return (
    <PokemonStates.Stats.Container>
      <PokemonStates.Stats.Title children={title} />
      <PokemonStates.Stats.Value children={value} />
    </PokemonStates.Stats.Container>
  );
};

export default function About({ navigation, route }) {
  const pokemon = route.params.pokemon;
  const layoutColor = pokemon.types[0].toLowerCase();

  return (
    <Container type={layoutColor}>
      <NavigatorHeader.Container>
        <NavigatorHeader.Button onPress={() => navigation.goBack()}>
          <BackIcon fill="white" width="25" height="25" />
        </NavigatorHeader.Button>
      </NavigatorHeader.Container>

      <Pokemon.Container>
        <Pokemon.Wrapper>
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
        </Pokemon.Wrapper>
      </Pokemon.Container>
      <PokemonStates.Container>
        <PokemonStates.Description children={pokemon.description} />

        <Column style={{ marginTop: 30 }}>
          <PokemonStates.Title children="Pokemon Data" color={layoutColor} />
          <PokemonStateContainer title="Species" value={pokemon.species} />
          <PokemonStateContainer title="Height" value={pokemon.height} />
          <PokemonStateContainer title="Weight" value={pokemon.weight} />
          <PokemonStateContainer title="Abilities" />
          <PokemonStateContainer title="Weaknesses" />
        </Column>
        <Column style={{ marginTop: 30 }}>
          <PokemonStates.Title children="Pokemon Data" color={layoutColor} />
          <PokemonStateContainer title="Species" value={pokemon.species} />
          <PokemonStateContainer title="Height" value={pokemon.height} />
          <PokemonStateContainer title="Weight" value={pokemon.weight} />
          <PokemonStateContainer title="Abilities" />
          <PokemonStateContainer title="Weaknesses" />
        </Column>
      </PokemonStates.Container>
    </Container>
  );
}
