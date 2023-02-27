import React from 'react';
import {TextField} from "@mui/material";


const InputForm = ({id, label, type, margin, fullWidth, inputWidth}) => {
  return (
    <TextField
      id={id}
      label={label}
      variant='standard'
      type={type}
      fullWidth={fullWidth}
      sx={{
        padding: '5px 30px 7px',
        background: '#F6F6FC',
        borderRadius: '5px',
        marginRight: margin,
        maxWidth: inputWidth,
        marginBottom: '30px'
      }}
      InputProps={{
        disableUnderline: true,
      }}
      InputLabelProps={{
        variant: 'filled',
        shrink: 'true',
        style: {padding: '0 20px', color:'rgba(0,0,0,0.5)'}
      }}
    />
  );
};

export default InputForm;