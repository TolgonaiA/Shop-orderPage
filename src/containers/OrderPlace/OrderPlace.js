import React from 'react';
import './OrderPlace.css'
import {Box, TextField, Typography} from "@mui/material";
import InputForm from "../../components/InputForm";

const OrderPlace = () => {
  return (
    <Box className='order-place'>
      <Typography sx={{padding: '0', fontSize: '20px'}} >Оформление заказа</Typography>
      <Box sx={{marginTop: '30px', display: 'flex', justifyContent: 'space-between'}}>
        <div className='order-place-block' style={{width: '48%'}}>
          <InputForm
            id="name"
            label="Имя"
            type="text"
            fullWidth='true'
          />
          <div style={{display: 'flex'}}>
            <InputForm
              id="phone"
              label="Телефон"
              type="tel"
              margin='15px'
              fullWidth='true'
            />
            <InputForm
              id="add"
              label="Доб"
              type="number"
              inputWidth='70px'
            />
          </div>
          <InputForm
            id="addPhone"
            label="Доп телефон или whatsapp"
            type="tel"
            fullWidth='true'
          />
        </div>
        <div className='order-place-block' style={{width: '48%'}}>
          <InputForm
            id="lastName"
            label="Фамилия"
            type="text"
            fullWidth='true'
          />
          <InputForm
            id="email"
            label="E-mail"
            type="mail"
            fullWidth='true'
          />
        </div>
      </Box>
    </Box>
  );
};

export default OrderPlace;