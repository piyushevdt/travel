'use client';

import { Button } from '@mui/material';

export default function CustomButton({ children, ...props }) {
  return (
    <Button
      {...props}
      sx={{
        backgroundColor: '#F1A501',
        color: '#FFFFFF',
        borderRadius: '10px',
        padding: '12px 24px',
        fontWeight: 'bold',
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#D69400',
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor: '#D69400',
        },
        '&:disabled': {
          backgroundColor: 'grey.300',
          color: 'grey.500',
        },
        ...props.sx, 
      }}
    >
      {children}
    </Button>
  );
}