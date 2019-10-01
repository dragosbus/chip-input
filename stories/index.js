import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import { green } from '@material-ui/core/colors'
import ChipInput from '../src/ChipInput'
import CustomizedUnderline from './examples/CustomizedUnderline'

storiesOf('ChipInput', module)
  .addDecorator(story => (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>{story()}</div>
  ))
  .add('with some chips', () => (
    <ChipInput
      defaultValue={['foo', 'bar']}
      fullWidth
      onChange={action('onChange')}
    />
  ))
  .add('with many chips', () => (
    <ChipInput
      defaultValue={[...Array(25).keys()].map(c => `Chip ${c}`)}
      onChange={action('onChange')}
      fullWidth
    />
  ))
  
  .add('with customized underline', () => <CustomizedUnderline />)
