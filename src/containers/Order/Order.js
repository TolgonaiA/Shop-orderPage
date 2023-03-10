import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Basket from "../Basket/Basket";
import './Order.css';
import OrderAmount from "../OrderAmount/OrderAmount";
import OrderPlace from "../OrderPlace/OrderPlace";
import ClientInfo from "../ClientInfo/ClientInfo";
import Delivery from "../Delivery/Delivery";


const Order = ({data, countDown, countUp, deleteHandler}) => {
  

  return (
    <Container maxWidth='lg' sx={{marginTop: '47px', background: 'rgba(229, 229, 229, 0.1)', position: 'relative'}}>
      <Typography className='order-path'>Главная/Корзина/Оформление заказа</Typography>
      <Typography variant='h4' className='order-title'>Оформление заказа</Typography>
      <Box className='order-wrap'>
        <Box>
          <Basket 
            data={data}
            countDown={countDown}
            countUp={countUp}
            deleteHandler={deleteHandler}
          />
          <OrderPlace/>
          <ClientInfo/>
          <Delivery/>
        </Box>
        <Box>
          <OrderAmount data={data}/>
        </Box>
      </Box>
    </Container>
  );
};

export default Order;