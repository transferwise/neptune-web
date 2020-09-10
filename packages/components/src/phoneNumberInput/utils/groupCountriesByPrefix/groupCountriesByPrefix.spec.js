import { groupCountriesByPrefix } from '.';

const countries = [
  {
    name: 'Canada',
    iso2: 'CA',
    iso3: 'CAN',
    phone: '+1',
  },
  {
    name: 'United States of America',
    iso2: 'US',
    iso3: 'USA',
    phone: '+1',
  },
  {
    name: 'United States Minor Outlying Islands',
    iso2: 'UM',
    iso3: 'UMI',
    phone: '+1',
  },
  {
    name: 'United Kingdom',
    iso2: 'GB',
    iso3: 'GBR',
    phone: '+44',
  },
  {
    name: 'Guernsey',
    iso2: 'GG',
    iso3: 'GGY',
    phone: '+44',
  },
  {
    name: 'Guinea',
    iso2: 'GN',
    iso3: 'GIN',
    phone: '+224',
  },
];

const groupedCountries = [
  {
    name: ['Canada', 'United States of America', 'United States Minor Outlying Islands'],
    iso2: ['CA', 'US', 'UM'],
    iso3: ['CAN', 'USA', 'UMI'],
    phone: '+1',
  },
  {
    name: ['United Kingdom', 'Guernsey'],
    iso2: ['GB', 'GG'],
    iso3: ['GBR', 'GGY'],
    phone: '+44',
  },
  {
    name: 'Guinea',
    iso2: 'GN',
    iso3: 'GIN',
    phone: '+224',
  },
];

describe('groupCountriesByPrefix', () => {
  it('groups countries by prefix', () => {
    expect(groupCountriesByPrefix(countries)).toEqual(groupedCountries);
  });
});
