() => {
  const [i18n, setI18n] = React.useState({
    locale: defaultLocale,
    messages: supportedLanguages[defaultLocale],
  });
  const [selectedLocale, setSelectedLocale] = React.useState(localeOptions[0]);

  return (
    <Provider i18n={i18n}>
      <label htmlFor="locales">
        Supported locales:
      </label>
      <Select
        id="locales"
        selected={selectedLocale}
        onChange={(item) => {
          setI18n({ locale: item.value, messages: supportedLanguages[item.value] });
          setSelectedLocale(item);
        }}
        options={localeOptions}
      />
      <br /><br />
      Translated message: <FormattedMessage {...messages.ariaLabel} />
    </Provider>
  );
}
