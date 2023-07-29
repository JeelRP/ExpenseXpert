import React, {useContext} from 'react'
import { Card, CardHeader, CardContent, Typography, Divider, Grid } from "@mui/material";
import useStyles from "./style"; 
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard';
const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card >
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance: ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}>
          <InfoCard />
          try saying: Add income for $100 in category salary for monday...
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent style={{ paddingTop: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main