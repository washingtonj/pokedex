import React, { useState } from "react";
import { Container, Filter, ButtonContainer } from "./HomeFilter.styles";
import Button from "../Button/Button";
import HorizontalScrollWithTitle from "./HorizontalScrollWithTitle";
import { HEIGHTS_ICONS, WEIGHTS_ICONS } from "../../utils/IconsWithColors";

function Filters({ onSubmit }) {
  const [types, setTypes] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [heights, setHeights] = useState([]);
  const [weights, setWeights] = useState([]);

  function handleSelect(id, type) {
    function remove(prev) {
      const next = [...prev];
      const index = next.indexOf(id);
      next.splice(index, 1);
      return next;
    }

    function add(prev) {
      return [...prev, id];
    }

    switch (type) {
      case "type":
        types.includes(id) ? setTypes(remove) : setTypes(add);
        break;
      case "weakness":
        weaknesses.includes(id) ? setWeaknesses(remove) : setWeaknesses(add);
        break;
      case "height":
        heights.includes(id) ? setHeights(remove) : setHeights(add);
        break;
      case "weight":
        weights.includes(id) ? setWeights(remove) : setWeights(add);
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <Filter.Container>
        <Filter.Title children="Filters" />
        <Filter.Description children="Use advanced search to explore Pokémon by type, weakness, height and more!" />

        {/* To NEXT feature */}
        {/* <HorizontalScrollWithTitle
          title="Types"
          items={TYPES_ICONS}
          selecteds={types}
          onSelect={(id) => handleSelect(id, "type")}
        />

        <HorizontalScrollWithTitle
          title="Weaknesses"
          items={TYPES_ICONS}
          selecteds={weaknesses}
          onSelect={(id) => handleSelect(id, "weakness")}
        /> */}

        <HorizontalScrollWithTitle
          title="Heights"
          items={HEIGHTS_ICONS}
          selecteds={heights}
          onSelect={(id) => handleSelect(id, "height")}
        />

        <HorizontalScrollWithTitle
          title="Weights"
          items={WEIGHTS_ICONS}
          selecteds={weights}
          onSelect={(id) => handleSelect(id, "weight")}
        />

        <ButtonContainer>
          <Button title="Reset" style={{ marginRight: 10 }} />
          <Button title="Submit" onPress={onSubmit} />
        </ButtonContainer>
      </Filter.Container>
    </Container>
  );
}

export default { Filters };
