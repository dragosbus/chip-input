import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import ChipInput from '../ChipInput'
import NewMuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

const styles = theme => ({
  chip: {
    margin: 0
  },
  focused: {},
  disabled: {},
  error: {},
  underline: {
    '&:after': {
      borderBottomColor: 'green',
    },
    '&:before': {
      borderBottom: `1px solid`,
      borderBottomColor: '#e0e0e0',
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
      borderBottom: `1px solid`,
      borderBottomColor: '#e0e0e0',
      '@media (hover: none)': {
        borderBottom: `1px solid`,
        borderBottomColor: '#e0e0e0',
      }
    },
  },
})

class CustomizedUnderline extends React.Component {
  render() {
    const { classes, ...other } = this.props

    return (
      <NewMuiThemeProvider>
        <ChipInput
          {...other}
          chipProps={{
            classes: {
              chip: classes.chip
            }
          }}
          InputProps={{
            classes: {
              underline: classes.underline,
            }
          }}
          defaultValue={['Butterfly', 'Unicorn', 'Rainbow', 'Fairy']}
        />
      </NewMuiThemeProvider>
    )
  }
}

export default withStyles(styles)(CustomizedUnderline)
