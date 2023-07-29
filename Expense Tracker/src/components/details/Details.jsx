import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  styled,
} from "@mui/material";

import { Doughnut } from 'react-chartjs-2';
import "chart.js/auto";

// import { Chart, ArcElement, DoughnutController } from "chart.js";
import useTransactions from "../../useTransactions";
import useStyles from "./style";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

// Chart.register(ArcElement, DoughnutController);
  return (
    <Card
      style={
        title === "Income"
          ? { borderBottom: "10px solid rgba(0, 255, 0, 0.5)" }
          : { borderBottom: "10px solid rgba(255, 0, 0, 0.5)" }
      }>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        {/* <Doughnut data={chartData} /> */}
        <Doughnut data={chartData}  style={{maxWidth:"1000px", maxHeight:"200px"}}/>

        {/* <canvas data={chartData} /> */}
      </CardContent>
    </Card>
  );
};

export default Details;
