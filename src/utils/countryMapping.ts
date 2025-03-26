// src/utils/countryMapping.ts
export const currencyToCode: { [key: string]: string } = {
    AUD: 'AU',
    BGN: 'BG',
    BRL: 'BR',
    CAD: 'CA',
    CHF: 'CH',
    CNY: 'CN',
    DKK: 'DK',
    EUR: 'EU',
    GBP: 'GB',
    HKD: 'HK',
    HRK: 'HR',
    HUF: 'HU',
    IDR: 'ID',
    ILS: 'IL',
    INR: 'IN',
    ISK: 'IS',
    JPY: 'JP',
    KRW: 'KR',
    MXN: 'MX',
    MYR: 'MY',
    NOK: 'NO',
    NZD: 'NZ',
    PHP: 'PH',
    PLN: 'PL',
    RON: 'RO',
    SEK: 'SE',
    SGD: 'SG',
    THB: 'TH',
    TRY: 'TR',
    USD: 'US',
    XDR: 'XDR',
    ZAR: 'ZA'
  };
  
  export const getCountryName = (currencyCode: string): string => {
    const countryNames: { [key: string]: string } = {
      AUD: 'Australia',
      BGN: 'Bulgaria',
      BRL: 'Brazil',
      CAD: 'Canada',
      CHF: 'Switzerland',
      CNY: 'China',
      DKK: 'Denmark',
      EUR: 'European Union',
      GBP: 'United Kingdom',
      HKD: 'Hong Kong',
      HRK: 'Croatia',
      HUF: 'Hungary',
      IDR: 'Indonesia',
      ILS: 'Israel',
      INR: 'India',
      ISK: 'Iceland',
      JPY: 'Japan',
      KRW: 'South Korea',
      MXN: 'Mexico',
      MYR: 'Malaysia',
      NOK: 'Norway',
      NZD: 'New Zealand',
      PHP: 'Philippines',
      PLN: 'Poland',
      RON: 'Romania',
      SEK: 'Sweden',
      SGD: 'Singapore',
      THB: 'Thailand',
      TRY: 'Türkiye',
      USD: 'United States of America',
      XDR: 'International Monetary Fund',
      ZAR: 'South Africa'
    };
    return countryNames[currencyCode] || currencyCode;
  };