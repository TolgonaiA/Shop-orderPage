import React from 'react';
import {Box, Container, Link, Typography} from "@mui/material";
import './Footer.css';


const data = {
  'Меню': ['Каталог', 'Акции', 'Популярные товары', 'Новинки', 'Новости', 'О компании', 'Контакты', 'Контакты'],
  'Категории': ['Бумага', 'Письмо и графика', 'Канц товары', 'Художественные товары', 'Творчество', 'Полиграфические материалы', 'Распродажи', 'Офисное оборудование', 'Игры и игрушки', 'Сувенирная продукция'],
}

const Footer = () => {
  return (
    <Box sx={{background: '#262626'}}>
      <Container className='footer-wrap' maxWidth='lg'>
        <Typography className='footer-title'>Kanzler&Bürger</Typography>
        <Box sx={{display:'flex'}}>
          {Object.keys(data).map(el =>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography sx={{color: '#fff'}}>{el}</Typography>
              {data[el].map(item => (
                <Link>{item}</Link>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;