import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';

export default function StandardImageList3() {
  return (
    <Box >
      <Typography sx={{backgroundColor:'red'}} variant="h2">Реклама</Typography>
  
      <ImageList sx={{ width: 300, height: 450, marginTop:10}} cols={2} rowHeight={170}>
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
    img: 'https://kalix.club/uploads/posts/2023-12/1702891905_kalix-club-p-tinkoff-fon-oboi-foni-64.jpg',
    title: 'Golowolomka',
  },
];