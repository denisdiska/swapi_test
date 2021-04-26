import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer'

import { PROGRESS_TYPE } from '../../constants/progressType'

export class filmsReducer extends ImmerReducer {
  getMyFilms() {
    this.draftState.myFilms = {
      ...this.draftState.myFilms,
      progress: PROGRESS_TYPE.WORK,
    }
  }

  getMyFilmsSuccess(data) {
    if (data.length > 0) {
      const [first] = data
      this.draftState.selectedUser = { ...first }
    }

    this.draftState.myFilms = {
      list: data,
      progress: PROGRESS_TYPE.SUCCESS,
    }
  }

  getMyFilmsError(error) {
    this.draftState.myFilms = {
      ...this.draftState.myFilms,
      error,
      progress: PROGRESS_TYPE.ERROR,
    }
  }
}

export const films = createReducerFunction(filmsReducer, {
  myFilms: {
    list: [],
    progress: PROGRESS_TYPE.IDLE,
  },
})

export const FilmsActions = createActionCreators(filmsReducer)
export default FilmsActions
