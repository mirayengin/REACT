import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, indigo, pink } from "@mui/material/colors";
import { flex } from "../styles/globalStyle";
import { useSelector } from "react-redux";

const KpiCards = () => {
  const { sales, purchases } = useSelector((state) => state.stock)
  
  const totalSales = sales?.
  const data = [
    {
      title: "profit",
      metric: "$0",
      icon: <MonetizationOnIcon />,
      color: indigo[900],
      bgColor: indigo[100],
    },
    {
      title: "sales",
      metric: "$0",
      icon: <PaymentsIcon />,
      color: pink[900],
      bgColor: pink[100],
    },
    {
      title: "purchhase",
      metric: "$0",
      icon: <ShoppingCartIcon />,
      color: amber[900],
      bgColor: amber[100],
    },
  ];

  return (
    <Grid container  justifyContent="center" alingItemns="center" spacing={2}>
      {data.map((item, indeks) => (
        <Grid key={indeks} item  xs={12} sm={6}  md={4}>
          <Paper sx={{p:2}} elevation={10}>
            <Box sx={flex}>
              <Avatar sx={{width:"4rem", height:"4rem", color:item.color, backgroundColor:item.bgColor}}>{item.icon}</Avatar>
              <Box>
                <Typography variant="button">{ item.title}</Typography>
                <Typography variant="h5">{ item.metric}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;