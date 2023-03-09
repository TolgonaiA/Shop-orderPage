import React from 'react';
import {Box, Container, Divider, Link, Typography} from "@mui/material";
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const data = {
  'Меню': ['Каталог', 'Акции', 'Популярные товары', 'Новинки', 'Новости', 'O компании', 'Контакты'],
  'Категории': ['Бумага', 'Письмо и графика', 'Канц товары', 'Художественные товары', 'Творчество', 'Полиграфические материалы', 'Распродажи', 'Офисное оборудование', 'Игры и игрушки', 'Сувенирная продукция'],
}


const contacts = {
  'Огонбаева, 222': ['0777 90 22 33', '0312 90 22 33'],
  'Эркиндик, 7': ['0777 90 22 43', '0312 90 22 34'],
  'Уметалиева, 84': ['0777 90 22 33', '0312 90 22 33']
}


const Footer = () => {
  return (
    <Box sx={{background: '#262626'}}>
      <Container className='footer-wrap' maxWidth='lg'>
        <Typography className='footer-title'>Kanzler&Bürger</Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          {Object.keys(data).map(el =>
            <Box key={el} sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography className='footer-subtitle'>{el}</Typography>
              {data[el].map(item => (
                <Link key={item} className='footer-item'>{item}</Link>
              ))}
            </Box>
          )}
          <Box>
            <Typography className='footer-subtitle'>Контакты</Typography>
            {Object.keys(contacts).map(el =>
              <Box key={el} sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography className='footer-item'>{el}</Typography>
                {contacts[el].map(item => (
                  <Typography key={item} className='footer-item'>{item}</Typography>
                ))}
              </Box>
            )}
          </Box>
          <Box>
            <Typography className='footer-subtitle'>Мы в соцсетях</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <InstagramIcon className='footer-item'/>
                <Link className='footer-item'>Instagram</Link>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <FacebookIcon className='footer-item'/>
                <Link className='footer-item'>Facebook</Link>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <WhatsAppIcon className='footer-item'/>
                <Link className='footer-item'>What's App</Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider sx={{bgcolor: 'rgba(255,255,255, 0.1)', margin: '30px 0'}}/>
        <Typography className='footer-item'>Some shop name (c) 2017. All rights reserved</Typography>
      </Container>
    </Box>
  );
};

export default Footer;