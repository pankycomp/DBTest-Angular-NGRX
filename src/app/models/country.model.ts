export interface Currency {
  code: string;
  name: string;
  symbol?: string;
}

export interface CountryData {
  name: string;
  capital: string;
  population: number;
  currencies: Currency[];
  flag: string;
}

export interface Country {
  name: string;
  capital: string;
  population: number;
  currencies: string;
  flag: string;
}
