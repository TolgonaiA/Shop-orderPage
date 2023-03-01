import React, {useState} from 'react';
import './Delivery.css';
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import InputForm from "../../components/InputForm";

const Delivery = () => {
  const [value, setValue] = useState('personal');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box className='order-place'>
      <Typography sx={{padding: '0', fontSize: '20px'}} >Доставка</Typography>
      <Box sx={{padding: '30px 0'}}>
        <FormControl>
          <Typography className='delivery-title'>Способ доставки</Typography>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <div className='delivery-item'>
              <FormControlLabel value="pickup" control={<Radio checkedIcon={<CheckIcon sx={{background: '#EA5A5A', borderRadius: '50%',color: '#fff', width: '24px', height: '24px'}}/>}></Radio>} label="Самовывоз" />
              <a href='#'>режим работы магазина ></a>
            </div>
            <div className='delivery-item'>
              <FormControlLabel value="delivery" control={<Radio checkedIcon={<CheckIcon sx={{background: '#EA5A5A', borderRadius: '50%',color: '#fff', width: '24px', height: '24px'}}/>}></Radio>} label="Курьерская доставка" />
              <a href='#'>условия доставки ></a>
            </div>
          </RadioGroup>
        </FormControl>
        <Typography className='delivery-title'>Адрес доставки</Typography>
        <Box sx={{marginTop: '30px', display: 'flex', justifyContent: 'space-between'}}>
          <div className='order-place-block' style={{width: '48%'}}>
            <InputForm
              id="country"
              label="Страна"
              type="text"
              fullWidth='true'
            />
            <InputForm
              id="street"
              label="Улица"
              type="tel"
              fullWidth='true'
            />
            <InputForm
              id="house"
              label="Дом"
              type="tel"
              fullWidth='true'
            />
          </div>
          <div className='order-place-block' style={{width: '48%'}}>
            <InputForm
              id="city"
              label="Город"
              type="text"
              fullWidth='true'
            />
            <InputForm
              id="appt"
              label="Квартира"
              type="mail"
              fullWidth='true'
            />
          </div>
        </Box>
        <Typography className='delivery-text'>Указать домофон, этаж, подъезд и комментарий к адресу</Typography>
        <InputForm
          id="comment"
          label="Комментарий"
          type="text"
          fullWidth='true'
        />
      </Box>
    </Box>
  );
};

export default Delivery;