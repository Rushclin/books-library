/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import React, { useCallback } from "react";
import Sticky from "react-stickynode";
import { useStickyState } from "../contexts/app/app.provider";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Waypoint } from "react-waypoint";
import { useStickyDispatch } from "../contexts/app/app.provider";
import SEO from "./seo";
import { app } from "configs/config";
import { Container } from "theme-ui";

export default function Layout({ children }) {
  const isSticky = useStickyState("isSticky");
  const dispatch = useStickyDispatch();
  const setSticky = useCallback(
    () => dispatch({ type: "SET_STICKY" }),
    [dispatch]
  );
  const removeSticky = useCallback(
    () => dispatch({ type: "REMOVE_STICKY" }),
    [dispatch]
  );

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (currentPosition === "above") {
      setSticky();
    }
    if (currentPosition === "below") {
      removeSticky();
    }
  };

  return (
    <React.Fragment>
      <Sticky enabled={isSticky} innerZ={1000}>
        <Header className={`${isSticky ? "sticky" : "unSticky"}`} />
      </Sticky>
      <Waypoint
        onEnter={removeSticky}
        onPositionChange={onWaypointPositionChange}
      />
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        <SEO title={app.fullName} />
        <Box
          sx={{
            pt: ["10px"],
            overflow: "hidden",
          }}
        >
          <Container>{children}</Container>
        </Box>
      </main>
      <Footer />
    </React.Fragment>
  );
}
