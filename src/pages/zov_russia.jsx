import { Box, CardMedia, Typography } from '@mui/material';
import StandardImageList1 from './zov';
import StandardImageList2 from './za-rf';
import MediaCard1 from './zovvvv';

function Babax() {
  return ( <div className="App">
    <Box sx={{display:'flex', justifyContent: 'space-evenly'}}>
      <Typography variant= "h4" >Фильтр </Typography>
      <Typography variant= "h4" >Театр </Typography>
      <Typography variant= "h4" >Кино </Typography>
      <Typography variant= "h3" >Сейчас в городе </Typography>
    </Box>
    <Box sx={{display:'flex', gap:5, justifyContent: 'space-around'}}>
      <StandardImageList1/>
      <StandardImageList2/>
      <Box sx={{backgroundColor:'#000A7D'}}>
      <Typography variant="h2">Реклама</Typography>
        <CardMedia
        component="img"
        height="200px"
        image="https://kalix.club/uploads/posts/2023-12/1702891905_kalix-club-p-tinkoff-fon-oboi-foni-64.jpg"
      />
      <Typography variant= "h3" >Сейчас в городе </Typography>
      <MediaCard1/>
      </Box>
      
      <Box>
        <Box sx={{display:'flex', gap: 40, justifyContent: 'space-between'}}>
  
        </Box>
    </Box>
    </Box>
    <Box>
    </Box>

    </div>

)}

export default Babax;
