() => {
  const lang = getLangFromLocale(defaultLocale);
  const [i18n, setI18n] = React.useState({
    locale: defaultLocale,
    messages: supportedLanguages[lang],
  });
  const [selectedLocale, setSelectedLocale] = React.useState(localeOptions[0]);

  return (
    <Provider i18n={i18n}>
      Translated message: <FormattedMessage {...messages.ariaLabel} />
      <br /><br />
      Formatting example: <Money amount={1234.5678} currency="GBP" />
      <br /><br />
      <label htmlFor="locales">
        Locales:
      </label>
      <Select
        id="locales"
        selected={selectedLocale}
        onChange={(item) => {
          const lang = getLangFromLocale(item.value);
          setI18n({ locale: item.value, messages: supportedLanguages[lang] });
          setSelectedLocale(item);
        }}
        options={localeOptions}
      />
    </Provider>
  );
}
