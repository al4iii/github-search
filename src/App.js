import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Content from "./Component/Content/Content";
import Header from "./Component/Header/Header";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header className={classes.paper} />
          </Grid>
          <Grid item xs={12}>
            <Content className={classes.paper} />
          </Grid>
        </Grid>
      </div>
    </Provider>
  );
}
