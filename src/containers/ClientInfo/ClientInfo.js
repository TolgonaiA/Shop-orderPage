import React, {useState} from 'react';
import {Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';


const ClientInfo = () => {
  const [value, setValue] = useState('personal');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box className='order-place'>
      <Typography sx={{padding: '0', fontSize: '20px'}} >Я</Typography>
      <Box sx={{padding: '30px 0'}}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="personal" control={<Radio checkedIcon={<CheckIcon sx={{background: '#EA5A5A', borderRadius: '50%',color: '#fff', width: '24px', height: '24px'}}/>}></Radio>} label="Физическое лицо" />
            <FormControlLabel value="company" control={<Radio checkedIcon={<CheckIcon sx={{background: '#EA5A5A', borderRadius: '50%',color: '#fff', width: '24px', height: '24px'}}/>}></Radio>} label="Юридическое лицо" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>

  );
};

export default ClientInfo;