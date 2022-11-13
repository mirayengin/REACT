import React from "react";
// import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
// import { Button, CardActionArea, CardActions } from '@mui/material';
import data from "../data";
import Grid from "@mui/material/Grid"

const CardGrid = () => {
  return (
    //? Burda grid yaısıyla cardları ekranlarda nasıl görüneceğini belirledik. En diştaki grid e container probuyla row gibi davranmasını istedik ve sonrada içteki ggrid ie item probu vererek col gibi davranmasını söyledik.Bunları yaparken sadece card a herhangi bir witdht değeri vermedik.
    <>
      <Typography variant="h4" align="center" color="warning" mt={4} mb={4} >Card And Grid</Typography>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {data.map((card) => {
        const { id, name, img, text } = card;
        return (
          <Grid item xs={12} sm={6} md={4}    >
            <Card id={id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
    </>
  );
};

export default CardGrid;
