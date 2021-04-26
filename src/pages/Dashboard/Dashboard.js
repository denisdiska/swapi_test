import React, { useEffect, useState } from 'react'

import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, makeStyles, ListItemText, Button } from '@material-ui/core'

import { getNewUsers, getNewPlanets, getNewVehicles, getNewFilms } from '../../store/thunk'

import { DefaultAutocomplete } from '../../components/DefaultAutocomplete'

const useStyles = makeStyles({
  list: {
    maxWidth: '80%',
    margin: '0 auto',
    '& a': {
      '& div:last-child': {
        width: '25%',
      },
    },
  },
  listItem: {
    margin: '0 auto',
    paddingLeft: '120px',
  },
  listItemText: {
    width: '37%',
  },
  logout: {
    backgroundColor: '#2839',
    marginLeft: '30px',
  },
})

export default function Dashboard() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [login, setLogin] = useState(null)
  const { users, planets, vehicles, films } = useSelector(({ users, planets, vehicles, films }) => ({
    users: users.myUsers.list,
    planets: planets.myPlanets.list,
    vehicles: vehicles.myVehicles.list,
    films: films.myFilms.list,
  }))

  useEffect(() => {
    dispatch(getNewUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    dispatch(getNewPlanets())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    dispatch(getNewVehicles())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    dispatch(getNewFilms())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function changeActiveUser(url) {
    const item = users?.find(el => el.url === url)
    const selectedUser = {
      ...item,
      films: item?.films?.map(el1 => films?.find(el => el.url === el1)?.title),
      vehicles: item?.vehicles?.map(el1 => vehicles?.find(el => el.url === el1)?.name),
      homeworld: planets?.find(el => el.url === item?.homeworld)?.name,
    }

    localStorage.setItem('selectedUser', JSON.stringify(selectedUser))
  }

  function delete_token() {
    localStorage.removeItem('linkedin_oauth2_state')

    setLogin(true)
  }

  return (
    <div>
      <DefaultAutocomplete users={users} changeActiveUser={changeActiveUser} />
      <Button className={classes.logout} onClick={() => delete_token()}>
        LOGOUT
      </Button>
      <List className={classes.list}>
        {users?.map((el, ind) => (
          <ListItem
            onClick={() => changeActiveUser(el.url)}
            button
            component={Link}
            to={`/character/${+el.id}`}
            key={ind}
            className={classes.listItem}
          >
            <ListItemText className={classes.listItemText}>Name: {el.name}</ListItemText>
            <ListItemText className={classes.listItemText}>Gender: {el.gender}</ListItemText>
            <ListItemText className={classes.listItemText}>
              Planet: {planets?.find(({ url }) => url === el.homeworld)?.name}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      {login && <Redirect to="/login" />}
    </div>
  )
}
