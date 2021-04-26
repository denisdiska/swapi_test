import React from 'react'

import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText, makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  list: {
    paddingLeft: '150px',
    paddingRight: '150px',
  },
  btn: {
    textAlign: 'center',
  },
  btnLink: {
    display: 'inline-block',
    border: `1px solid ${theme.colors.orange}`,
    borderRadius: '8px',
    padding: '20px 40px',
    textDecoration: 'none',
    color: '#000',
    '&:hover': {
      backgroundColor: `${theme.colors.darkBone}`,
    },
  },
}))

export default function CharacterPage() {
  const classes = useStyles()

  const user = JSON.parse(localStorage.getItem('selectedUser'))
  const userInfo = []
  for (let prop in user) {
    if (
      prop !== 'starships' &&
      prop !== 'species' &&
      prop !== 'created' &&
      prop !== 'edited' &&
      prop !== 'id' &&
      prop !== 'url' &&
      user[prop].length !== 0
    ) {
      if (Array.isArray(user[prop])) {
        const arrStrings = user[prop].map((el, ind, arr) => (ind === arr.length - 1 ? el : el + ', '))
        userInfo.push(
          <ListItem key={prop}>
            <ListItemText>
              {prop}: {arrStrings}
            </ListItemText>
          </ListItem>
        )
      } else {
        userInfo.push(
          <ListItem key={prop}>
            <ListItemText>
              {prop}: {user[prop]}
            </ListItemText>
          </ListItem>
        )
      }
    }
  }

  return (
    <Box className={classes.list}>
      <List>{userInfo}</List>
      <div className={classes.btn}>
        <Link className={classes.btnLink} to="/">
          Вернуться к списку.
        </Link>
      </div>
    </Box>
  )
}
