import React from 'react';
import {
  Box,
  CardMedia,
  Typography
} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const rows = ['Фото', 'Название', 'Артикул', 'Кол-во','Цена']

const data = [
  {
    img: {Image},
    name: 'Lorem ipsum',
    art: 'L434-GH43',
    count: '0',
    price: 420,
  },
  {
    img: '/assets/image-not-available.jpg',
    name: 'Lorem ipsum',
    art: 'L434-GH43',
    count: '0',
    price: 420,
  },
  {
    img: '/assets/image-not-available.jpg',
    name: 'Lorem ipsum',
    art: 'L434-GH43',
    count: '0',
    price: 420,
  },
]

const Basket = () => {

  return (
    <Box>
      <Box>
        <Typography>Корзина(3)<KeyboardArrowUpIcon/></Typography>
      </Box>
      <Box>
        <Box sx={{display: 'flex'}}>
          {rows.map(el => <Typography>{el}</Typography>)}
        </Box>
        <Box>
          {data.map(el => (
            <Box>
              <CardMedia
                component='img'
                image='/assets/image-not-available.jpg'
              />
              <Typography>{el.name}</Typography>
              <Typography>{el.art}</Typography>
              <Typography>{el.count}</Typography>
              <Typography>{el.price}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Basket;