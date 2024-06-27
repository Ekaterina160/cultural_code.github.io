import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';

export default function StandardImageList2() {
  return (
    <Box>
      <Typography variant="h2">Новинки теарта</Typography>
  
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
    img: 'https://www.northdrama.ru/wp-content/uploads/2024/05/afisha_sajt_szhat-543x768.jpg',
    title: 'Golowolomka',
  },
  {
    img: 'https://www.northdrama.ru/wp-content/uploads/2024/05/afisha_sajt-544x768.png',
    title: '',
  },
  {
    img: 'https://www.northdrama.ru/wp-content/uploads/2024/05/moskva_prevyu-543x768.png',
    title: 'Camera',
  },
  {
    img: 'https://www.northdrama.ru/wp-content/uploads/2022/04/norilskie-anekdoty_afisha-538x768.jpg',
    title: 'Coffee',
  },
];
