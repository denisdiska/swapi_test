import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer'

import { PROGRESS_TYPE } from '../../constants/progressType'

export class usersReducer extends ImmerReducer {
  getMyUsers() {
    this.draftState.myUsers = {
      ...this.draftState.myUsers,
      progress: PROGRESS_TYPE.WORK,
    }
  }

  getMyUsersSuccess(data) {
    if (data.length > 0) {
      const [first] = data
      this.draftState.selectedUser = { ...first }
    }

    this.draftState.myUsers = {
      list: data,
      progress: PROGRESS_TYPE.SUCCESS,
    }
  }

  getMyUsersError(error) {
    this.draftState.myUsers = {
      ...this.draftState.myUsers,
      error,
      progress: PROGRESS_TYPE.ERROR,
    }
  }

  setSelectedUser({ item, film, vehicle, planet }) {
    this.draftState.selectedUser = {
      ...item,
      films: film,
      vehicles: vehicle,
      homeworld: planet,
    }
  }
}

export const users = createReducerFunction(usersReducer, {
  myUsers: {
    list: [],
    progress: PROGRESS_TYPE.IDLE,
  },
  selectedUser: {},
})

export const UsersActions = createActionCreators(usersReducer)
export default UsersActions
