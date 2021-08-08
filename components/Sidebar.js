import { Drawer, Grid, List, ListItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { styled } from "@material-ui/system";
import Link from "next/link";
import React from "react";
import NavData from "../src/data/nav.json";

const Sidebar = () => {
  const useStyles = makeStyles(() => ({
    paper: {
      width: 130,
      height: 2069,
      background: "#663399",
      color: "#fff",
      marginRight: -50,
    },
  }));

  const DrawerComponent = styled(Drawer)({});

  const BrandText = styled(Typography)({
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: 700,
  });

  const Icon = styled("img")({
    display: "block",
    width: 30,
    margin: "auto",
  });

  const Text = styled(Typography)({
    margin: "auto",
    display: "none",
    fontSize: 14,
  });

  const ListItemDiv = styled(ListItem)({
    "&:hover": {
      h6: {
        display: "block",
      },
    },
  });

  const ItemContainer = styled(Grid)({
    margin: "10px auto",
    padding: 10,
    borderRadius: 5,
    width: 100,
    "&:hover": {
      background: "#704996",
      cursor: "pointer",
      margin: "10px 2px",
    },
  });

  const classes = useStyles();
  return (
    <>
      <DrawerComponent
        classes={{ paper: classes.paper }}
        variant="permanent"
        anchor="left"
      >
        <BrandText variant="h4">Gull</BrandText>

        <List>
          {NavData.map((data) => (
            <Link href={data?.path === "/" ? "/" : `/demo/${data?.title}`}>
              <ListItemDiv key={data?.id}>
                <ItemContainer className="item-container" container>
                  <Grid item md={12}>
                    <Icon src={data?.icon} alt="" />
                  </Grid>
                  <Text variant="h6">{data?.title}</Text>
                </ItemContainer>
              </ListItemDiv>
            </Link>
          ))}
        </List>
      </DrawerComponent>
    </>
  );
};

export default Sidebar;
