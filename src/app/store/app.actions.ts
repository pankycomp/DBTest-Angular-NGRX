import { createAction, props } from '@ngrx/store';
import { CountryData } from './models/country.model';

export const selectRegion = createAction(
  'Select Region',
  props<{ selectedRegion: string }>()
);

export const selectCountry = createAction(
  'Select Country',
  props<{ selectedCountry: string }>()
);

export const loadCountries = createAction(
  'Load countries',
  props<{ selectedRegion: string }>()
);

export const loadCountriesSuccess = createAction(
  'Countries Load Success',
  props<{ countries: CountryData[] }>()
);

export const loadCountriesFailure = createAction(
  'Countries APILoad Fail',
  props<{ error: string }>()
);
