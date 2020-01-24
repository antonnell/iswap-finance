import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
} from '@material-ui/core';

import Have from './have'
import Want from './want'
import Sending from './sending'
import Receiving from './receiving'
import ConversionRatios from './conversionRatios'
import Fees from './fees'

// import Store from "../../stores";
// const emitter = Store.emitter
// const dispatcher = Store.dispatcher
// const store = Store.store

const styles = theme => ({
  root: {
    flex: 1,
    maxWidth: '1280px',
    width: '100%'
  },
  iHaveContainer: {
    flex: 1,
    display: 'flex',
  },
  iWantContainer: {
    flex: 1,
    display: 'flex',
  },
  conversionRatioContainer: {
    width: '100%',
    display: 'flex'
  },
  sendingContainer: {
    flex: 1,
    display: 'flex',
  },
  receivingContainer: {
    flex: 1,
    display: 'flex',
  },
  feesContainer: {
    display: 'flex'
  },
  card: {
    width: '100%',
    display: 'flex',
    marginTop: '60px',
    flexWrap: 'wrap'
  },
});

class Swap extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        <Card className={ classes.card }>
          <div className={ classes.iHaveContainer }>
            <Have />
          </div>
          <div className={ classes.iWantContainer }>
            <Want />
          </div>
          <div className={ classes.conversionRatioContainer }>
            <ConversionRatios />
          </div>
          <div className={ classes.sendingContainer }>
            <Sending />
          </div>
          <div className={ classes.feesContainer }>
            <Fees />
          </div>
          <div className={ classes.receivingContainer }>
            <Receiving />
          </div>
        </Card>
      </div>
    )
  };
}

export default withRouter(withStyles(styles)(Swap));
