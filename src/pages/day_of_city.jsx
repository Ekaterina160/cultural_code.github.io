import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function MediaCard1() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'#000A7D'}}>
      <CardMedia
        sx={{ height: 140}}
        image="https://gazetazp.ru/files/file/79c221de17d9fe995998e2256108e087.JPG"
        title="green iguana"
      />
        <CardContent > 
          <Typography gutterBottom variant="h5" sx={{color:'white'}} component="div">
            День города 2024 <span style={{color:'#000A7D'}}> House Progect</span>
          </Typography>
          <Typography variant="body2" sx={{color:'white'}}>
          21 июля на Ленинском проспекте будет отмечаться день города, к нам приедут "..."
          </Typography>
        </CardContent>
        <CardActions>
          <Button  size="small" sx={{color:'D5D7F0'}} >Узнать больше</Button>
        </CardActions>
      
    </Card>
  );
}
