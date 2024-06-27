import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import StandardImageList from "./images";

function Eshkere() {
  return (
  <div>
    <Box  sx={{display:'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Typography variant= "h5"> Новинки</Typography>
      <Typography variant= "h5"> В прокате</Typography>
      <Typography variant= "h3"> Кино</Typography>
      <Typography variant= "h5"> Лучшее</Typography>
      <Typography variant= "h5"> Расписание</Typography>
    </Box>
    <Box sx={{display:'flex', gap: 5, backgroundColor: '#000A7D', color:'white'}}>
    <StandardImageList/>
    <Box >
      <Typography variant="h2">Купить билеты</Typography>
      <Typography sx={{marginTop:'50px'}} variant="h4">Майор гром:игра</Typography>
      <Typography variant="h4">Плохие парни</Typography>
      <Typography variant="h4">Головоломка2</Typography>
      <Typography variant="h4">Славные парни</Typography>
      <Typography variant="h4">Другое ...</Typography>
    </Box>
    <Box>
      <Typography variant="h2">Для детей</Typography>
      <Box>
        <ImageList sx={{ width: 500, height: 800, marginTop:8 }} cols={2} rowHeight={259}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    </Box>
    </Box>
    </div>
  );
}

const itemData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/ru/7/78/Inside_Out_2.jpeg',
    title: 'InsideOut2',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/ru/2/29/Finding_Nemo.jpg',
    title: 'FindingNemo',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/ru/1/1d/Rapunzel_poster.jpg',
    title: 'Rapunzel',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/ru/6/6a/Trolls_%28film%29.jpg',
    title: 'Trolls',
  },
 
];


export default Eshkere;