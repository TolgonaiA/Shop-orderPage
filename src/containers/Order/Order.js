import React from 'react';
import { useState } from 'react';
import {Box, Container, Typography} from "@mui/material";
import Basket from "../Basket/Basket";
import './Order.css';
import OrderAmount from "../OrderAmount/OrderAmount";
import OrderPlace from "../OrderPlace/OrderPlace";
import ClientInfo from "../ClientInfo/ClientInfo";
import Delivery from "../Delivery/Delivery";
import Pen from '../../assets/pen.png';
import USB from '../../assets/usb.png';
import Pens from '../../assets/pens.png';


const Order = () => {
  const [data, setData] = useState([
    {
      img: Pen,
      name: 'Lorem ipsum dolor sit amet consectetur. Duis',
      art: 'L434-GH43',
      count: 1,
      price: 420,
    },
    {
      img: USB,
      name: 'Lorem ipsum dolor sit amet ',
      art: 'L434-GH43',
      count: 1,
      price: 420,
    },
    {
      img: Pens,
      name: 'Lorem ipsum dolor sit amet consectetur. Dictum venenatis porta at mus sit congue',
      art: 'L434-GH43',
      count: 1,
      price: 10000,
      prevPrice: 11000
    },
  ])

  return (
    <Container maxWidth='lg' sx={{marginTop: '47px', background: 'rgba(229, 229, 229, 0.1)', position: 'relative'}}>
      <Typography className='order-path'>Главная/Корзина/Оформление заказа</Typography>
      <Typography variant='h4' className='order-title'>Оформление заказа</Typography>
      <Box sx={{display: 'flex'}}>
        <Box sx={{maxWidth: '65%'}}>
          <Basket data={data}/>
          <OrderPlace/>
          <ClientInfo/>
          <Delivery/>
        </Box>
        <Box sx={{marginLeft: '30px', width: '32%'}}>
          <OrderAmount data={data}/>
        </Box>
      </Box>
    </Container>
  );
};

export default Order;