import { useContext } from 'react';
import { SnackbarContext } from './SnackbarProvider';

function useSnackbar() {
  const { createSnackbar } = useContext(SnackbarContext);

  return createSnackbar;
}

export default useSnackbar;
