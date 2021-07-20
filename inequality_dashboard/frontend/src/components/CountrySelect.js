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

  const [country, setCountry] = React.useState('');

  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  const { id } = props;

  React.useEffect(() => {
    //TODO maybe call in Content to avoid two different calls ?
    fetch("/api/avg-income-countries-years/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id={id}>
        <div>{`value: ${country !== null ? `'${ country.code }'` : 'null'}`}</div>
        <div>{`max year: ${country.years !== undefined ? `'${ Math.max(...country.years) }'` : 'Not selected'}`}</div>
        { <div>{`min year: ${country.years !== undefined ? `'${ Math.min(...country.years) }'` : 'Not selected'}`}</div> }
  
        <Autocomplete
          onChange={(event, newValue) => {
            setCountry(newValue);
            //In this case gets the biggest year for the country
            props.changeCountry(newValue,Math.max(...newValue.years) ,props.id);
          }}
          
          options={items}
          
          classes={{
            option: classes.option,
          }}
          style={{ margin: 10 }}
          autoHighlight
          getOptionLabel={(option) => option.country}
          renderOption={(option) => (
            <React.Fragment>
              <span>{countryToFlag(option.code)}</span>
              {option.country} ({option.code})
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
      </div>
    );
  }
}