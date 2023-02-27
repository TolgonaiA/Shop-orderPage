import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Basket from "../Basket/Basket";
import './Order.css';
import OrderAmount from "../OrderAmount/OrderAmount";
import OrderPlace from "../OrderPlace/OrderPlace";


const Order = () => {
  return (
    <Container maxWidth='lg' sx={{marginTop: '47px', background: 'rgba(229, 229, 229, 0.1)', position: 'relative'}}>
      <Typography className='order-path'>Главная/Корзина/Оформление заказа</Typography>
      <Typography variant='h4' className='order-title'>Оформление заказа</Typography>
      <Box sx={{display: 'flex'}}>
        <Box sx={{maxWidth: '65%'}}>
          <Basket/>
          <OrderPlace/>
        </Box>
        <Box sx={{marginLeft: '30px', width: '32%'}}>
          <OrderAmount/>
        </Box>
      </Box>
    </Container>
  );
};

export default Order;