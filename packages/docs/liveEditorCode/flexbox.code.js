<Flex
  marginX={1}
  paddingX={1}
  marginY={1}
  paddingY={1}
  direction={{
    default: 'row-reverse',
    xs: 'column',
    sm: 'row',
    md: 'column',
    lg: 'row',
    xl: 'row',
  }}
  className="flex-docs"
>
  <Box
    justifyContent="center"
    alignItems="center"
    size={{
      default: 1,
      xs: 0.25,
      sm: 0.25,
      md: 0.3333333333333333,
      lg: 0.5,
      xl: 1,
    }}
    className="BoxDoc"
  >
    <div className="demo" />
  </Box>
  <Box
    justifyContent="center"
    alignItems="center"
    size={{
      default: 1,
      xs: 0.25,
      sm: 0.25,
      md: 0.3333333333333333,
      lg: 0.5,
      xl: 1,
    }}
    className="BoxDoc"
  >
    <div className="demo" />
  </Box>
</Flex>;
