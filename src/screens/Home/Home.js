import React, { useEffect, useState } from "react";
import {
  Container,
  Welcome,
  SearchBar,
  ItemList,
  Loader,
  Navbar,
  PokeballBackground,
  Wrapper,
} from "./Home.styles";
import { HomeCard as Card, HomeFilter as Filters } from "../../components";
import PokedexService from "../../services/pokedex";
import { Alert, TouchableOpacity } from "react-native";

export default () => {
  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(false);

  async function getList() {
    try {
      const promise = await PokedexService.get("pokemon/1");
      const data = promise.data;
      setPokes([...data]);
    } catch (error) {
      setPokes([]);
      console.log();
      Alert.alert(error.response.data.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      <PokeballBackground>
        <Wrapper>
          {/* Filters Navbar */}
          <Navbar.Container>
            <Navbar.Generation />
            <Navbar.Sort />
            <TouchableOpacity onPress={() => setFilter(true)}>
              <Navbar.Filter />
            </TouchableOpacity>
          </Navbar.Container>

          {/* Apresentation Message */}
          <Welcome.Container>
            <Welcome.Title children="Pokedex" />
            <Welcome.Description children="Search for pokemon by name or using the national pokedex number" />
          </Welcome.Container>

          {/* Pokemon Search */}
          <SearchBar.Container>
            <SearchBar.Icon />
            <SearchBar.Input
              selectionColor="red"
              placeholder="What Pokemon are you looking for?"
            />
          </SearchBar.Container>
        </Wrapper>
      </PokeballBackground>

      <Wrapper>
        {/* Loading Component */}
        {loading && (
          <Loader.Container>
            <Loader.Animated>
              <Loader.Icon />
            </Loader.Animated>
            <Loader.Message children="Carregando" />
          </Loader.Container>
        )}

        {/* Pokemon List to render after Loading */}
        {!loading && (
          <ItemList.Container>
            <ItemList.Scrolling>
              {pokes.map((item) => (
                <Card
                  style={{ marginBottom: 35 }}
                  key={item.number}
                  id={item.number}
                  name={item.name}
                  types={item.types.map((item) => item.toLowerCase())}
                  avatar={item.sprite}
                />
              ))}
            </ItemList.Scrolling>
          </ItemList.Container>
        )}
      </Wrapper>

      {filter && <Filters.Filters onSubmit={() => setFilter(false)} />}
    </Container>
  );
};
