import React from 'react';
import {Container, Typography} from "@mui/material";
import Basket from "./Basket";

const Order = () => {
  return (
    <Container maxWidth='lg'>
      <Typography>Главная/Корзина/Оформление заказа</Typography>
      <Typography variant='h4'>Оформление заказа</Typography>
      <Basket/>
    </Container>
  );
};

export default Order;