import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'#000A7D' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s0.rbk.ru/v6_top_pics/media/img/0/23/755613698309230.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
          Выпускной с командой House Progect
        </Typography>
        <Typography variant="body2" sx={{color:'white'}}>
        22 июня выпускников поздравит команда House Prolect в арт-холле
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:'D5D7F0'}}>Узнать больше</Button>
        <Button size="small" sx={{color:'D5D7F0'}}>Купить билет</Button>
      </CardActions>
    </Card>
  );
}
