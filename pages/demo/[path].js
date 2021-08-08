import { styled } from "@material-ui/system";
import { useRouter } from "next/dist/client/router";
import React from "react";

const DemoComp = () => {
  const router = useRouter();
  const { path } = router.query;

  const RootContainer = styled("div")({
    marginLeft: 200,
    marginTop: 50,
  });
  return (
    <RootContainer>
      <p>This is {path} page. dummy content</p>
    </RootContainer>
  );
};

export default DemoComp;
