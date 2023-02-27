import React from 'react';
import {
  Box, Button,
  CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography
} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Basket.css';
import Pen from '../../assets/pen.png';
import USB from '../../assets/usb.png';
import Pens from '../../assets/pens.png';

const rows = ['Фото', 'Название', 'Артикул', 'Кол-во','Цена']

const data = [
  {
    img: Pen,
    name: 'Lorem ipsum dolor sit amet consectetur. Duis',
    art: 'L434-GH43',
    count: '0',
    price: 420,
  },
  {
    img: USB,
    name: 'Lorem ipsum dolor sit amet ',
    art: 'L434-GH43',
    count: '0',
    price: 420,
  },
  {
    img: Pens,
    name: 'Lorem ipsum dolor sit amet consectetur. Dictum venenatis porta at mus sit congue',
    art: 'L434-GH43',
    count: '0',
    price: 10000,
    prevPrice: 11000
  },
]

const Basket = () => {

  return (
    <Box sx={{marginBottom: '30px'}}>
      <Box className='basket-title'>
        <Typography className='basket-title-item'>Корзина(3)</Typography>
        <button type='button' className='basket-title-btn'><KeyboardArrowUpIcon className='basket-title-icon'/></button>
      </Box>
      <TableContainer className='basket-table' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {rows.map(el => <TableCell className='basket-table-title' align='left'>{el}</TableCell>)}
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(el =>
              <>
              <TableRow
                key={el.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={el.img} alt={el.name}/>
                </TableCell>
                <TableCell className='basket-table-text' align="left">{el.name}</TableCell>
                <TableCell className='basket-table-text' align="left">{el.art}</TableCell>
                <TableCell align="left">
                  <div className='basket-table-count'>
                    <button className='basket-table-count-btn' type='button'>-</button>
                    {el.count}
                    <button className='basket-table-count-btn' type='button'>+</button>
                  </div>
                </TableCell>
                {el.prevPrice
                  ? <TableCell sx={{fontSize: '18px', color: '#E11E26'}} align="left">
                      {el.price}c
                      <span className='basket-table-item'>{el.prevPrice}c</span>
                    </TableCell>
                  : <TableCell sx={{fontSize: '18px'}} align="left">{el.price}c</TableCell>
                }
                <TableCell align="left">
                  <button className='basket-delete-btn' type='button'></button>
                </TableCell>
              </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Basket;