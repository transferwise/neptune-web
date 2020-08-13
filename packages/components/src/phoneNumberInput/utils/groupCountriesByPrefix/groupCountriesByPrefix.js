import { isArray } from '@transferwise/neptune-validation';

export const groupCountriesByPrefix = (countries) => {
  const groupedArray = countries.reduce((acc, country) => {
    const { name, iso2, iso3, phone } = country;
    if (acc[phone]) {
      const previousValue = acc[phone];
      acc[phone] = {
        ...previousValue,
        name: isArray(previousValue.name)
          ? [...previousValue.name, name]
          : [previousValue.name, name],
        iso2: isArray(previousValue.iso2)
          ? [...previousValue.iso2, iso2]
          : [previousValue.iso2, iso2],
        iso3: isArray(previousValue.iso3)
          ? [...previousValue.iso3, iso3]
          : [previousValue.iso3, iso3],
      };
    } else {
      acc[phone] = country;
    }
    return acc;
  }, {});
  return Object.values(groupedArray);
};
