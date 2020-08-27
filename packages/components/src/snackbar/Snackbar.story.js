import React from 'react';
import { action } from '@storybook/addon-actions';
import SnackbarProvider, { SnackbarConsumer } from './SnackbarProvider';
import { Snackbar } from './Snackbar';
import Button from '../button';

export default {
  component: Snackbar,
  title: 'Snackbar',
};

export const basic = () => {
  return (
    <SnackbarProvider>
      <SnackbarConsumer>
        {({ createSnackbar }) => (
          <Button
            block
            onClick={() =>
              createSnackbar({
                text: <span>Some text</span>,
                action: {
                  label: 'Bite me',
                  onClick: () => action("I can't believe you've done this."),
                },
              })
            }
          >
            Show
          </Button>
        )}
      </SnackbarConsumer>
    </SnackbarProvider>
  );
};
