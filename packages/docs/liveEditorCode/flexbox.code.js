const code = `<Flex
  marginX={1}
  paddingX={1}
  marginY={1}
  paddingY={1}
  direction={{
    "xs": "column",
    "sm": "row",
    "md": "column",
    "lg": "row",
    "xl": "row"
  }}
>
  <Box
  justifyContent="center"
  alignItems="center"
  size={{
    "xs": 0.25,
    "sm": 0.25,
    "md": 0.3333333333333333,
    "lg": 0.5,
    "xl": 1
  }}
  >
    <div className="demo" />
  </Box>
  <Box
  justifyContent="center"
  alignItems="center"
  size={{
    "xs": 0.25,
    "sm": 0.25,
    "md": 0.3333333333333333,
    "lg": 0.5,
    "xl": 1
  }}
  >
    <div className="demo" />
  </Box>
</Flex>
`;

export default code;
