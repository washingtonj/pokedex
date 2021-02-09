import React from "react";
import { Container, Welcome, SearchBar } from "./Home.styles";

export default () => {
  return (
    <Container>
      <Welcome.Container>
        <Welcome.Title children="Pokedex" />
        <Welcome.Description children="Search for pokemon by name or using the national pokedex number" />
      </Welcome.Container>

      <SearchBar.Container>
        <SearchBar.Input selectionColor="red" />
      </SearchBar.Container>
    </Container>
  );
};
