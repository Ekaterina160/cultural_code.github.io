import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';

export default function StandardImageList() {
  return (
    <Box>
        <Typography variant="h2">Популярное</Typography>
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
    
  );
}

const itemData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/78/Inside_Out_2.jpeg/274px-Inside_Out_2.jpeg',
    title: 'InsideOut2',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/fb/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%9C%D0%B0%D0%B9%D0%BE%D1%80_%D0%93%D1%80%D0%BE%D0%BC_%D0%98%D0%B3%D1%80%D0%B0.jpg/200px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%9C%D0%B0%D0%B9%D0%BE%D1%80_%D0%93%D1%80%D0%BE%D0%BC_%D0%98%D0%B3%D1%80%D0%B0.jpg',
    title: 'MajorGrom',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/ru/2/21/Bad_Boys-_Ride_or_Die.jpg',
    title: 'BadBoys',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/e/e9/The_Nice_Guys_poster.png',
    title: 'NiceGuys',
  },
 
];
