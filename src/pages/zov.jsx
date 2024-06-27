import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';

export default function StandardImageList1() {
  return (
    <Box>
      <Typography variant="h2">Новинки кино</Typography>
  
      <ImageList sx={{ width: 300, height: 450, marginTop:10 }} cols={2} rowHeight={170}>
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
    img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/78/Inside_Out_2.jpeg/800px-Inside_Out_2.jpeg',
    title: 'Golowolomka',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
    title: '',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/The_Nice_Guys_poster.png/220px-The_Nice_Guys_poster.png',
    title: 'Camera',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4a/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%9C%D0%B0%D0%B9%D0%BE%D1%80_%D0%93%D1%80%D0%BE%D0%BC_%D0%A7%D1%83%D0%BC%D0%BD%D0%BE%D0%B9_%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80.jpg/210px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%9C%D0%B0%D0%B9%D0%BE%D1%80_%D0%93%D1%80%D0%BE%D0%BC_%D0%A7%D1%83%D0%BC%D0%BD%D0%BE%D0%B9_%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80.jpg',
    title: 'Coffee',
  },
];
