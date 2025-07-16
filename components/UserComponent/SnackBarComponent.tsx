import React from 'react';
// @ts-ignore
import Snackbar from '@mui/joy/Snackbar';

export interface CustomSnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
  color: 'primary' | 'neutral' | 'danger' | 'success' | 'warning';
  variant: 'outlined' | 'plain' | 'soft' | 'solid';
}

const SnackBarComponent: React.FC<CustomSnackbarProps> = ({
  open,
  onClose,
  message,
  color,
  variant
}) => {
  return (
    <Snackbar
      open={open}
      // @ts-ignore
      onClose={(event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        onClose();
      }}
      autoHideDuration={4000}
      variant={variant}
      color={color}
    >
      {message}
    </Snackbar>
  );
};

export default SnackBarComponent;
