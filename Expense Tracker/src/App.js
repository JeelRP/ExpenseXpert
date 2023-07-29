import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";

import Details from "./components/details/Details";
import Main from "./components/main/Main";
import useStyles from "./style";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        margin={2}
        container
        spacing={5}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}>
        <Grid item xs={12} sm={4} sx={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} sx={classes.main}>
          <Main />
        </Grid>
        {/* <Grid item xs={12} sm={4} sx={classes.desktop}>
          <Details title="Income" />
        </Grid> */}
        <Grid item xs={12} sm={4} sx={classes.last}>
          <Details title="Expense" />
        </Grid>
        {/* <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer> */}
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        {/* <ErrorPanel /> */}
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
