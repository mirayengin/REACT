import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnHoverStyle } from '../styles/globalStyle';
import useStockCalls from '../hooks/useStockCalls';

export default function FirmCard({ firm,setOpen,setInfo }) {
  const { deleteFirm } = useStockCalls();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={firm?.image}
        alt="frim image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}}>
      <EditIcon
          sx={btnHoverStyle}
          // ! firm ve ınfo bilgilerini doldur edit işlmi için
          onClick={() => {
            setOpen(true);
            setInfo(firm);
          }}
        />
        <DeleteOutlineIcon
          sx={btnHoverStyle}
          onClick={() => deleteFirm(firm?.id)}
        />
      </CardActions>
    </Card>
  );
}