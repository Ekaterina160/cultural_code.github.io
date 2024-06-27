
import { Box, CardMedia, Typography } from '@mui/material';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Papka() {
  return (
<Box> 
    <Box sx={{display:'flex', gap: 5, justifyContent: 'space-around', alignItems:'center', backgroundColor: 'black', padding: 5, color:'white'}}>
        <Typography variant="h3">новинки</Typography>
        <Typography variant="h1">театр</Typography>
        <Typography variant="h3">расписание</Typography>
      </Box>
      <Box sx={{display:'flex', gap: 5, justifyContent: 'space-around', alignItems: 'flex-start', marginTop: 10, flexWrap: 'wrap'}}>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'
        }}>
          <Typography variant="h3">старые</Typography>
          <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={2}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', textAlign:'center', backgroundColor: 'green', padding: 5, height:'500px', justifyContent:'center', marginTop:-10}}>
          <Typography variant="h3">купить билеты</Typography>
          <Typography variant="h3">снежная королева</Typography>
          <Typography variant="h3">ночь в театре</Typography>
          <Typography variant="h3">пилот ландора</Typography>
        </Box>
        <Box sx={{display:'flex', gap: 5}}>
          <Box>
            <Typography variant="h3">лучшее</Typography>
            <CardMedia
              component="img"
              height="220"
              image='https://www.northdrama.ru/wp-content/uploads/2024/05/afisha_sajt-544x768.png'
          />
          <CardMedia
              component="img"
              height="220"
              image='https://www.northdrama.ru/wp-content/uploads/2024/05/afisha_sajt_szhat-543x768.jpg'
          />
          </Box>

          <Box >
            <Typography variant="h3">новые</Typography>         
             <CardMedia
              component="img"
              height="220"
              image='https://www.northdrama.ru/wp-content/uploads/2024/04/prevyu-543x768.png'
          />
                    <CardMedia
              component="img"
              height="220"
              image='https://www.northdrama.ru/wp-content/uploads/2024/05/nizhnij-novgorod_prevyu-543x768.png'
          />
          </Box>
        </Box>
      </Box>
    
  </Box>
  );
}

const itemData = [
  {
    img: 'https://avatars.mds.yandex.net/i?id=a8116203f3833f6d4ed6e8576d5386a9-5560397-images-thumbs&n=13',
    title: 'landora',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://res.cloudinary.com/dydwjm2ai/image/upload/ujvsu6elwnnm5zh4mpqe',
    title: 'ponevole',
  },
  {
    img: 'https://kartinki.pibig.info/uploads/posts/2023-04/1682157473_kartinki-pibig-info-p-kartinki-dlya-spektaklya-snezhnaya-korolev-7.jpg',
    title: 'koroleva',
  },
];

export default Papka;