import React from 'react';
import {Container, Typography} from "@mui/material";
import Basket from "../Basket/Basket";
import './Order.css';

const Order = () => {
  return (
    <Container maxWidth='lg' sx={{marginTop: '47px', background: 'rgba(229, 229, 229, 0.1)'}}>
      <Typography className='order-path'>Главная/Корзина/Оформление заказа</Typography>
      <Typography variant='h4' className='order-title'>Оформление заказа</Typography>
      <Basket/>
    </Container>
  );
};

export default Order;