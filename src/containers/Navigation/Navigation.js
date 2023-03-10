import React, {useState} from 'react';
import {Box, Button, Container, Link, Typography} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import './Navigation.css';

const nav = ['Каталог', 'Акции', 'Популярные товары', 'Новинки', 'Новости', 'О компании', 'Контакты']


const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <Box sx={{backgroundColor: '#F8F8F8'}}>
      <Container sx={{maxWidth: '1280px', margin: '0 auto'}}>
        <Box sx={{display: 'flex', justifyContent:'space-between', padding: '20px 0', alignItems: 'center'}}>
          <Box onClick={() => setIsMobile(false)} className={isMobile ? 'nav-links-mobile' : 'nav-links'} sx={{display: 'flex'}}>
            {/*eslint-disable-next-line*/}
            {nav.map(el => <a className='nav-links-items' key={el}>{el}</a>)}
          </Box>
          <Button onClick={() => setIsMobile(!isMobile)} className='mobile-menu'>
            {isMobile ? <CloseIcon/>:<ListIcon/>}
          </Button>
          <Box sx={{display: 'flex'}}>
            <Typography sx={{fontSize: '14px', position: 'relative', marginRight: '50px'}}>
              <MailOutlineIcon sx={{top: '3px', left: '-20px', width: '18px', height: '15px', position: 'absolute'}}/>
              info@shop.kg
            </Typography>
            <Link sx={{color: '#E11E26', fontSize: '14px', borderBottom: '1px solid #E11E26', position: 'relative', marginRight: '18px'}} underline='none'>
              <PhoneIcon sx={{top: '3px', left: '-22px', width: '18px', height: '15px', position: 'absolute'}}/>
              Позвонить
              <KeyboardArrowDownIcon sx={{top: '3px', right: '-18px', width: '18px', height: '15px', position: 'absolute'}}/>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navigation;