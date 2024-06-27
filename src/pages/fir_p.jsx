import { Box, Typography } from "@mui/material";
import MediaCard1 from "./day_of_city";
import MediaCard2 from "./celebrate";


function Fir_p() {

  return( 
  <div style={{width:'100%'}}>
    <Box sx={{display:'flex', width:'100%', justifyContent: 'space-evenly' }}>
      <Typography variant="h4" sx={{padding:3}}> Пройдут вскоре </Typography>
      <Typography variant="h4" sx={{padding:3}}> Сейчас в городе </Typography>
      <Typography variant="h4" sx={{padding:3}}> Все мероприятия </Typography>
    </Box>
    <Box sx={{display:'flex', justifyContent: 'space-evenly'}}>
      <MediaCard1/>
      <MediaCard2/>
    </Box>
    
  </div>
  
)}

export default Fir_p;