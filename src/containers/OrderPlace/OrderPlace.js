import React from 'react';
import './OrderPlace.css'
import {Box, Typography} from "@mui/material";

const OrderPlace = () => {
  return (
    <Box className='order-place'>
      <Typography sx={{padding: '0', fontSize: '20px'}} >Оформление заказа</Typography>
      
    </Box>
  );
};

export default OrderPlace;