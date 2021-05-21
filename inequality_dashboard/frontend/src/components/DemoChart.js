import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import CountrySelect from './CountrySelect';
import CustomTreemap from './charts/CustomTreemap';

const useStyles = makeStyles((theme) => ({
  title: {
    //fontSize : "100px",
    padding: "20px",
  }
}));

export default function DemoChart() {
  const classes = useStyles();

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [countryLeft, setCountryLeft]= React.useState('');
  const [countryRight, setCountryRight]= React.useState('');
  
  function changeCountry(country,year,id) {
    //API call to get values for the country/year and store them in state
    fetch("/api/average-income-repartition/"+ country.code + "/" + year)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (id == "left") {
            setCountryLeft(result);
          } else {
            setCountryRight(result);
          }          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  return (    
    <Grid container spacing={3} >
      <Grid item xs={12}>
        <Typography  variant="h2" className={classes.title}>
          Comparison            
        </Typography>
        
        <Typography variant="body">
          First pick up two countries and year you want to compare 
        </Typography>
      </Grid>
      <Grid item  xs={12} sm={6} >
        <CountrySelect id="left" changeCountry={changeCountry} />
        <div>{`p0p50left : ${countryLeft !== null ? `'${ countryLeft.p0p50 }'` : 'null'}`}</div>
        <div>{`p50p90 left : ${countryLeft !== null ? `'${ countryLeft.p50p90 }'` : 'null'}`}</div>
        <div>{`p90p99 left : ${countryLeft !== null ? `'${ countryLeft.p90p99 }'` : 'null'}`}</div>
        <div>{`p99p100 left : ${countryLeft !== null ? `'${ countryLeft.p99p100 }'` : 'null'}`}</div>
        <div class={classes.treemap}>
          <CustomTreemap data = {countryLeft} />  
        </div>   
      </Grid>

      <Grid item xs={12} sm={6}>
        <CountrySelect id="right" changeCountry={changeCountry} />
        <div>{`p0p50 right: ${countryRight!== null ? `'${ countryRight.p0p50 }'` : 'null'}`}</div>
        <div>{`p50p90 right : ${countryRight !== null ? `'${ countryRight.p50p90 }'` : 'null'}`}</div>
        <div>{`p90p99 right : ${countryRight !== null ? `'${ countryRight.p90p99 }'` : 'null'}`}</div>
        <div>{`p99p100 right : ${countryRight !== null ? `'${ countryRight.p99p100 }'` : 'null'}`}</div>
        <div class={classes.treemap}>
          <CustomTreemap data = {countryRight} />          
        </div>          
      </Grid>
  
    </Grid>    
  );
}