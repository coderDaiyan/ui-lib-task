import { useTheme } from "@material-ui/core";
import { styled } from "@material-ui/system";
import React from "react";
import CardData from "../src/data/card.json";

const Card = () => {
  const theme = useTheme();

  const CardsContainer = styled("div")({
    margin: "50px auto",
    display: "grid",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  });

  const CardDiv = styled("div")({
    background: "white",
    padding: 10,
    margin: 20,
    width: 250,
    display: "flex",
    borderRadius: 20,
    [theme.breakpoints.up("lg")]: {
      width: 300,
    },
  });

  const Content = styled("div")({
    marginLeft: 20,
  });

  const IconContainer = styled("div")(({ bgColor }) => ({
    background: bgColor,
    padding: "10px",
    borderRadius: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const Icon = styled("img")({
    width: 30,
  });

  return (
    <>
      <CardsContainer>
        {CardData.map((card) => (
          <>
            <CardDiv>
              <IconContainer bgColor={card.color2}>
                <Icon src={card.icon} alt="" />
              </IconContainer>
              <Content>
                <p>{card.title}</p>
                <h1 style={{ marginTop: -20 }}>{card.number}</h1>
              </Content>
            </CardDiv>
          </>
        ))}
      </CardsContainer>
    </>
  );
};

export default Card;
