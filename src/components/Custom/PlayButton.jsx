'use client';

import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const PlayButton = ({
  label = 'Play Demo',
  onClick,
  size = 64,
  iconSize = 'large',
  sx = {},
}) => {
  return (
    <Box display="flex" alignItems="center">
      <Button
        onClick={onClick}
        sx={{
          minWidth: 0,
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: '#E25C47',
          boxShadow: '0 8px 20px rgba(226, 92, 71, 0.3)',
          color: 'white',
          '&:hover': {
            backgroundColor: '#d14f3c',
          },
          ...sx,
        }}
      >
        <PlayArrowIcon fontSize={iconSize} />
      </Button>

      {label && (
        <Typography
          variant="h6"
          sx={{ ml: 2, color: '#6B7280', fontWeight: 500 }}
        >
          {label}
        </Typography>
      )}
    </Box>
  );
};

export default PlayButton;
