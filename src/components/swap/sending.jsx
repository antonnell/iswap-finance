import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  InputAdornment
} from '@material-ui/core';

// import {
//   BALANCES_RETURNED
// } from '../../constants'

// import Store from "../../stores";
// const emitter = Store.emitter
// const dispatcher = Store.dispatcher
// const store = Store.store

const styles = theme => ({
  root: {
    padding: '0px 0px 24px 0px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  inputCard: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
  },
  inputCardHeading: {
    width: '100%',
    padding: '24px 0px 12px 35px'
  },
  inputAdornment: {
    fontWeight: '600',
    fontSize: '1.5rem'
  }

});

class Sending extends Component {
  constructor() {
    super()

    this.state = {
      amount: '',
      amountError: false
    }
  }

  render() {
    const { classes, asset } = this.props;
    const {
      amount,
      amountError
    } = this.state;

    return (
      <div className={ classes.root }>
        <div className={ classes.inputCard }>
          <Typography variant='h3' className={ classes.inputCardHeading }>I am sending</Typography>
          { this.renderAmountInput('amount', amount, amountError, 'Amount', '0.00', asset) }
        </div>
      </div>
    )
  };

  onChange = (event, value) => {
    let val = []
    val[event.target.name] = event.target.value
    this.setState(val)
  };

  renderAmountInput = (id, value, error, label, placeholder, inputAdornment) => {

    const { classes } = this.props
    const { loading } = this.state

    return (
      <TextField
        fullWidth
        className={ classes.amountInput }
        id={ id }
        name={ id }
        value={ value }
        error={ error }
        onChange={ this.onChange }
        disabled={ loading }
        placeholder={ placeholder }
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end" className={ classes.inputAdornment }><Typography variant='h3'>{ inputAdornment }</Typography></InputAdornment>,
        }}
      />
    )
  }
}

export default withRouter(withStyles(styles)(Sending));