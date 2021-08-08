import { Avatar, Badge, Container } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import { styled } from "@material-ui/system";
import React from "react";
import Bell from "./Icons/Bell";
import Scale from "./Icons/Scale";
import Search from "./Search";

const Nav = () => {
  const LeftSideContainer = styled("div")({
    display: "flex",
  });

  const RightSideContainer = styled("div")({
    display: "flex",
  });

  const NavContainer = styled(Container)({
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 140,
    marginTop: 20,
  });

  const IconContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 20px",
  });

  const InputContainer = styled("div")({
    input: {
      border: 0,
      outline: 0,
      padding: 10,
      width: 300,
      borderRadius: 20,
    },
  });

  const useStyles = makeStyles(() => ({
    icon: {
      marginRight: "10px",
      marginTop: "10px",
      marginLeft: "10px",
    },
    avatar: {
      marginRight: "10px",
      marginLeft: "20px",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <NavContainer>
        <LeftSideContainer>
          <IconContainer>
            <MenuIcon />
          </IconContainer>
          <InputContainer>
            <Search />
          </InputContainer>
        </LeftSideContainer>
        <RightSideContainer>
          <Badge className={classes.icon} color="primary">
            <Scale />
          </Badge>
          <Badge className={classes.icon} badgeContent={4} color="primary">
            <Bell />
          </Badge>
          <Avatar className={classes.avatar}>H</Avatar>
        </RightSideContainer>
      </NavContainer>
    </>
  );
};

export default Nav;
