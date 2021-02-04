/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function CountrySelect(props) {
  const classes = useStyles();

  const [country, setCountry]= React.useState('');
  const [year, setYear] = React.useState('');

  return (
    <div>
      <div>{`value: ${country !== null ? `'${ country.code }'` : 'null'}`}</div>
      <div>{`year: ${year !== null ? `'${ year }'` : 'null'}`}</div>

      <Autocomplete
        onChange={(event, newValue) => {
          setCountry(newValue);
          setYear(null);
        }}

        options={countries}
        classes={{
          option: classes.option,
        }}
        style={{ margin: 10 }}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(option) => (
          <React.Fragment>
            <span>{countryToFlag(option.code)}</span>
            {option.label} ({option.code})
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            variant="outlined"
            style={{  maxWidth: 400 }}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />

      <Autocomplete
        options={country.years || []}
        onChange={(event, newValue) => {
          setYear(newValue);
          props.changeCountry(country,newValue,props.id);
        }}
        inputValue={year || ''}
        value={year || ''}
        noOptionsText='Select a Country first'
        getOptionLabel={(option) => option}
        style={{ margin: 10 }}
        renderInput={(params) => <TextField {...params} style={{  maxWidth: 400 }} label="Year" variant="outlined" />}
      />

    </div>
  );
}

const countries = [
  { code: 'AD', label: 'Andorra', years: ['2010','2020'] },
  { code: 'AE', label: 'United Arab Emirates', years: ['2010','2011'] }
];