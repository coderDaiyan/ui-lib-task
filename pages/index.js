import { Container } from "@material-ui/core";
import { styled } from "@material-ui/system";
import { useRouter } from "next/dist/client/router";
import React from "react";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  const router = useRouter();

  const RootContainer = styled(Container)({
    marginLeft: 135,
    padding: 20,
  });

  const BodyContainer = styled("div")({
    padding: 0,
  });
  return (
    <>
      <Sidebar />
      <Nav />
      {router.pathname === "/" ? (
        <RootContainer>
          <Cards />
        </RootContainer>
      ) : (
        <BodyContainer>{children}</BodyContainer>
      )}
    </>
  );
}
