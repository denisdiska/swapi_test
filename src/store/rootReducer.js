import { combineReducers } from 'redux'

import { users } from './reducer/users'
import { planets } from './reducer/planets'
import { films } from './reducer/films'
import { vehicles } from './reducer/vehicles'

const rootReducer = {
  users,
  planets,
  films,
  vehicles,
}

export default combineReducers(rootReducer)
