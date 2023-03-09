 import React from 'react';
import './OrderAmount.css';
import {Box, Typography} from "@mui/material";

const OrderAmount = ({data}) => {
  return (
    <Box className='order-amount'>
      <div className='order-amount-wrap'>
        <Typography sx={{padding: '0', fontSize: '20px'}} >Стоимость заказа</Typography>
        <div className='order-amount-detail'>
          <div>
            <p className='order-amount-text'>Товары({data.length})</p>
            <p className='order-amount-text amount'>{data.map(el => el.count * el.price).reduce((a,b) => a+b)}c</p>
          </div>
          <div>
            <p className='order-amount-text'>Доставка</p>
            <p className='order-amount-text amount'>Бесплатно</p>
          </div>
        </div>
      </div>
      <div className='order-amount-total-wrap'>
        <p className='order-amount-total'>Итого</p>
        <p className='total-amount'>{data.map(el => el.count * el.price).reduce((a,b) => a+b)}с</p>
      </div>
      <button className='total-amount-btn' type='button'>Подтвердить заказ</button>
      <div className='total-amount-agreement'>Подтверждая заказ, я принимаю условия
        <a href='#'> пользовательского соглашения</a>
      </div>
    </Box>
  );
};

export default OrderAmount;