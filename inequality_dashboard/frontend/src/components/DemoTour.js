import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CountrySelect from './CountrySelect';
import CustomTreemap from './charts/CustomTreemap';
import Tour from './Tour';

const useStyles = makeStyles((theme) => ({
  title: {
    //fontSize : "100px",
    padding: "20px",
  }
}));

export default function DemoTour() {
  const classes = useStyles();

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [countryLeft, setCountryLeft]= React.useState('');
  const [countryRight, setCountryRight]= React.useState('');
  
  function changeCountry(country,year,id) {
    //API call to get values for the country/year and store them in state
    fetch("/api/avg-income-list/"+ country.code + "/" + year)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (id == "left") {
            setCountryLeft(result[0][Object.keys(result[0])[0]]);
          } else {
            setCountryRight(result[0][Object.keys(result[0])[0]]);
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
          First pick up on country to see its inequality
          <Tour></Tour>
        </Typography>
      </Grid>
      <Grid item  xs={12} sm={12} >
        <CountrySelect id="left" changeCountry={changeCountry} />
        <div class={classes.treemap}>
          <CustomTreemap data = {countryLeft} />  
        </div>   
      </Grid>
    </Grid>    
  );
}
