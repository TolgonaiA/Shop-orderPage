import React from 'react';
import './OrderPlace.css'
import {Box, TextField, Typography} from "@mui/material";
import InputForm from "../../components/InputForm";

const OrderPlace = () => {
  return (
    <Box className='order-place'>
      <Typography sx={{padding: '0', fontSize: '20px'}} >Оформление заказа</Typography>
      <Box>
        <InputForm
          id="name"
          label="Имя"
          type="password"
        />
      </Box>
    </Box>
  );
};

export default OrderPlace;