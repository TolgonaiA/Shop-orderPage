import React from 'react';
import {
  Box, Button,
  CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography
} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Basket.css';


const rows = ['Фото', 'Название', 'Артикул', 'Кол-во','Цена']



const Basket = ({data}) => {

  return (
    <Box sx={{marginBottom: '30px'}}>
      <Box className='basket-title'>
        <Typography className='basket-title-item'>Корзина({data.length})</Typography>
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