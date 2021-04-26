import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer'

import { PROGRESS_TYPE } from '../../constants/progressType'

export class planetsReducer extends ImmerReducer {
  getMyPlanets() {
    this.draftState.myPlanets = {
      ...this.draftState.myPlanets,
      progress: PROGRESS_TYPE.WORK,
    }
  }

  getMyPlanetsSuccess(data) {
    if (data.length > 0) {
      const [first] = data
      this.draftState.selectedUser = { ...first }
    }
    this.draftState.myPlanets = {
      list: data,
      progress: PROGRESS_TYPE.SUCCESS,
    }
  }

  getMyPlanetsError(error) {
    this.draftState.myPlanets = {
      ...this.draftState.myPlanets,
      error,
      progress: PROGRESS_TYPE.ERROR,
    }
  }
}

export const planets = createReducerFunction(planetsReducer, {
  myPlanets: {
    list: [],
    progress: PROGRESS_TYPE.IDLE,
  },
})

export const PlanetsActions = createActionCreators(planetsReducer)
export default PlanetsActions
