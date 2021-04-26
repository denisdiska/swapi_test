import React from 'react'

import { TextField, makeStyles } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  autocomplete: {
    width: '400px',
    margin: '0 auto',
  },
})

export default function DefaultAutocomplete({ users, changeActiveUser }) {
  const classes = useStyles()
  const defaultProps = {
    options: users,
    getOptionLabel: option => option.name,
  }

  const history = useHistory()
  const completeName = id => history.push(`/character/${+id}`)

  return (
    <Autocomplete
      {...defaultProps}
      id="auto-complete"
      autoComplete
      includeInputInList
      renderInput={params => <TextField {...params} label="Поиск по имени" margin="normal" />}
      getOptionSelected={(option, value) => option.name === value.name}
      onChange={(event, value, option) => {
        option === 'select-option' && completeName(value.id)
        changeActiveUser(value.url)
      }}
      className={classes.autocomplete}
    />
  )
}
