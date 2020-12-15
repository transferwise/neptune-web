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
              onClick: () => alert("I can't believe you've done this."),
            },
            theme: 'light', // or 'dark'
          })
        }
      >
        Show
      </Button>
    )}
  </SnackbarConsumer>
</SnackbarProvider>;
