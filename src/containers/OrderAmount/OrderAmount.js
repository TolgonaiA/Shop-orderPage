 import React from 'react';
import './OrderAmount.css';
import {Box, Typography} from "@mui/material";

const OrderAmount = () => {
  return (
    <Box className='order-amount'>
      <div className='order-amount-wrap'>
        <Typography sx={{padding: '0', fontSize: '20px'}} >Стоимость заказа</Typography>
        <div className='order-amount-detail'>
          <div>
            <p className='order-amount-text'>Товары(3)</p>
            <p className='order-amount-text amount'>1200c</p>
          </div>
          <div>
            <p className='order-amount-text'>Доставка</p>
            <p className='order-amount-text amount'>Бесплатно</p>
          </div>
        </div>
      </div>
      <div className='order-amount-total-wrap'>
        <p className='order-amount-total'>Итого</p>
        <p className='total-amount'>1200с</p>
      </div>
      <button className='total-amount-btn' type='button'>Подтвердить заказ</button>
      <div className='total-amount-agreement'>Подтверждая заказ, я принимаю условия
        <a href='#'> пользовательского соглашения</a>
      </div>
    </Box>
  );
};

export default OrderAmount;