import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1050,
    margin: '50px auto',
  },
  Paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Cards(props) {

  const { data: { totalCases, totalRecovered, totalDeaths, totalActive } } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} >
          <Paper className={`${classes.Paper} cases`} elevation={3}>
            <Typography color="textSecondary" gutterBottom>Total Cases</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={totalCases}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2">Number of total cases of COVID-19</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={`${classes.Paper} recovered`} elevation={3}>
            <Typography color="textSecondary" gutterBottom>Total Recovered</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={totalRecovered}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2">Number of recovered from COVID-19</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={`${classes.Paper} active`} elevation={3}>
            <Typography color="textSecondary" gutterBottom>Active Cases</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={totalActive}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2">Number of active cases of COVID-19</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={`${classes.Paper} deaths`} elevation={3}>
            <Typography color="textSecondary" gutterBottom>Total Deaths</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={totalDeaths}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
