import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer'

import { PROGRESS_TYPE } from '../../constants/progressType'

export class vehiclesReducer extends ImmerReducer {
  getMyVehicles() {
    this.draftState.myVehicles = {
      ...this.draftState.myVehicles,
      progress: PROGRESS_TYPE.WORK,
    }
  }

  getMyVehiclesSuccess(data) {
    if (data.length > 0) {
      const [first] = data
      this.draftState.selectedUser = { ...first }
    }

    this.draftState.myVehicles = {
      list: data,
      progress: PROGRESS_TYPE.SUCCESS,
    }
  }

  getMyVehiclesError(error) {
    this.draftState.myVehicles = {
      ...this.draftState.myVehicles,
      error,
      progress: PROGRESS_TYPE.ERROR,
    }
  }
}

export const vehicles = createReducerFunction(vehiclesReducer, {
  myVehicles: {
    list: [],
    progress: PROGRESS_TYPE.IDLE,
  },
})

export const VehiclesActions = createActionCreators(vehiclesReducer)
export default VehiclesActions
