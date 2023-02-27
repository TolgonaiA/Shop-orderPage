import React from 'react';
import {TextField} from "@mui/material";


const InputForm = ({id, label, type}) => {
  return (
    <TextField
      id={id}
      label={label}
      variant='standard'
      type={type}
      sx={{
        padding: '5px 30px',
        background: '#F6F6FC',
      }}
      InputProps={{
        disableUnderline: true,
      }}
      InputLabelProps={{
        variant: 'filled',
        shrink: 'true',
      }}
    />
  );
};

export default InputForm;