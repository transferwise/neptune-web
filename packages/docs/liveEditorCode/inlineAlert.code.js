() => {
  return (
    <>
      {/* has-error, has-info, has-success, has-warning */}
      <div className="form-group has-warning">
        <label className="control-label" htmlFor="id">
          Some text
        </label>
        <input type="text" className="form-control" id="id" />
        <InlineAlert type={InlineAlert.Type.WARNING}>
          Payments sent to your bank details today might not arrive in time for the holidays.
        </InlineAlert>
      </div>
    </>
  );
};
