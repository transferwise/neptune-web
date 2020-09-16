() => {
  const [currentPageIndex, setCurrentPageIndex] = React.useState(4);
  return (
    <Pagination
      canFetchMorePages={false}
      type={Pagination.Type.FULL}
      numberOfPages={9}
      currentPageIndex={currentPageIndex}
      onClick={setCurrentPageIndex}
    />
  );
};
