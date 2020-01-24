import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  FormControl,
  MenuItem,
  Select
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
  assetSelectRoot: {
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '10px'
  },
  assetSelectMenu: {
    padding: '24px',
    minWidth: '200px'
  },
  assetSelectIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    borderRadius: '25px',
    background: '#dedede',
    height: '50px',
    width: '50px',
    textAlign: 'center',
    cursor: 'pointer'
  },
  assetSelectIconName: {
    paddingLeft: '10px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }

});

class Want extends Component {
  constructor() {
    super()

    this.state = {
      asset: '',
      assetOptions: [
        'ETH',
        'FTM',
        'USDT',
        'CUSD',
        'TUSD',
        'SAI'
      ],
      assetError: false
    }
  }

  render() {
    const { classes } = this.props;
    const {
      asset,
      assetOptions,
      assetError
    } = this.state;

    return (
      <div className={ classes.root }>
        <div className={ classes.inputCard }>
          <Typography variant='h3' className={ classes.inputCardHeading }>I want</Typography>
          { this.renderAssetSelect('asset', asset, assetOptions, assetError) }
        </div>
      </div>
    )
  };

  onChange = (event, value) => {
    let val = []
    val[event.target.name] = event.target.value
    this.setState(val)
  };

  renderAssetSelect = (id, value, options, error) => {

    const { classes } = this.props
    const { loading } = this.state

    return (
      <FormControl className={ classes.assetSelectRoot } fullWidth variant="outlined" error={ error }>
        <Select
          id={ id }
          name={ id }
          disableUnderline={ true }
          value={ value }
          onChange={ this.onChange }
          disabled={ loading }
          fullWidth
          autoWidth={true}
          renderValue={ this.renderAssetOption }
        >
          { options ? options.map(this.renderAssetOption) : null }
        </Select>
      </FormControl>
    )
  };

  renderAssetOption = (option) => {

    const { classes } = this.props

    return (
      <MenuItem key={option} value={option} className={ classes.assetSelectMenu }>
        <React.Fragment>
          <div className={ classes.assetSelectIcon }>
            <img
              alt=""
              src={ require('../../assets/'+option+'-logo.png') }
              height="50px"
            />
          </div>
          <div className={ classes.assetSelectIconName }>
            <Typography  variant='h1'>{ option }</Typography>
          </div>
        </React.Fragment>
      </MenuItem>
    )
  }
}

export default withRouter(withStyles(styles)(Want));
