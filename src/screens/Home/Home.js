import React, { useEffect, useState } from "react";
import { Container, Welcome, SearchBar, ItemList, Loader } from "./Home.styles";
import { HomeCard as Card } from "../../components";
import { getById } from "../../services/pokedex";

export default () => {
  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getList() {
    const data1 = await getById('meowth');
    const data2 = await getById('charmander');
    const data3 = await getById(1);
    const data4 = await getById('mewtwo')

    setPokes([...data1, ...data2, ...data3, ...data4]);
    setLoading(false);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      <Welcome.Container>
        <Welcome.Title children="Pokedex" />
        <Welcome.Description children="Search for pokemon by name or using the national pokedex number" />
      </Welcome.Container>

      <SearchBar.Container>
        <SearchBar.Icon />
        <SearchBar.Input
          selectionColor="red"
          placeholder="What Pokemon are you looking for?"
        />
      </SearchBar.Container>

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
    </Container>
  );
};
