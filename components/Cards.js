import { styled } from "@material-ui/system";
import React from "react";
import Card from "./Card";

const Cards = () => {
  const CardContainer = styled("div")({});

  return (
    <>
      <CardContainer>
        <Card />
      </CardContainer>
    </>
  );
};

export default Cards;
