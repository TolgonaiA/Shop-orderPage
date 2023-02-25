import React from 'react';
import {Box, Button, Container, FormControl, Link, OutlinedInput} from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './SearchBar.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  return (
    <Container maxWidth='lg' className='searchBar-wrap' sx={{display: 'flex', alignItems: 'center', marginTop:'20px'}}>
      <Box sx={{display: 'flex'}}>
        <Box sx={{display: 'flex', marginRight: '41px'}}>
          <Box className='logo1'/>
          <Link className='logo'/>
        </Box>
        <Button className='btn-catalog'>
          Каталог
          <KeyboardArrowDownIcon sx={{top: '17px', right: '21px', width: '18px', height: '15px', position: 'absolute'}}/>
        </Button>
      </Box>
      <Box className='searchBar-search-block' sx={{display: 'flex', flex: 1}}>
        <FormControl sx={{flex: 1}}>
          <OutlinedInput
            sx={{
              backgroundColor: '#F7F7F7',
              color: '#333',
              "&:hover > .MuiOutlinedInput-notchedOutline" : {
                borderColor : "#E11E26"
              },
              "&:active > .MuiOutlinedInput-notchedOutline" : {
                borderColor : "#E11E26"
              },
              "&:focus-within > .MuiOutlinedInput-notchedOutline" : {
                borderColor : "#E11E26"
              }
            }}
            id="search-item"
            startAdornment={<SearchIcon sx={{color: '#333', opacity: '0.7'}}/>}
            placeholder='Найти товар'
          />
        </FormControl>
        <Box sx={{marginLeft: '41px'}}>
          <Button className='searchBar-icon-btn searchBar-icon-shop' sx={{marginRight: '16px'}}><ShoppingCartCheckoutIcon className='searchBar-icon '/></Button>
          <Button className='searchBar-icon-btn'><PersonOutlineIcon className='searchBar-icon'/></Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SearchBar;