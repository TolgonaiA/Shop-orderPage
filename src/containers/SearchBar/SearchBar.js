import React from 'react';
import {Box, Button, Container, TextField} from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const SearchBar = () => {
  return (
    <Container maxWidth='lg' sx={{display: 'flex'}}>
      <Box>
        LOGO
      </Box>
      <Button sx={{backgroundColor: '#ccc'}}>Каталог</Button>
      <TextField id="outlined-basic" label='Найти товар' variant="outlined"/>
      <Button><ShoppingCartCheckoutIcon/></Button>
      <Button><PersonOutlineIcon/></Button>
    </Container>
  );
};

export default SearchBar;