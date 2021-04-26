import Actions from '../rootActions'
import api from '../../utils/api'
import endpoint from '../../constants/endpoint'

export const getNewUsers = () => {
  return async dispatch => {
    try {
      dispatch(Actions.users.getMyUsers())

      const data = []
      for (let page = 1; page <= 9; page++) {
        const resp = await api.get(endpoint.newUsers(page))

        const { results } = resp
        for (let i = 0; i <= results.length; i++) {
          if (results[i] !== undefined) {
            results[i].id = `${page}` + i
            data.push(results[i])
          }
        }
      }

      dispatch(Actions.users.getMyUsersSuccess(data))
    } catch (error) {
      dispatch(Actions.users.getMyUsersError(error))
    }
  }
}
export const getNewPlanets = () => {
  return async dispatch => {
    try {
      dispatch(Actions.planets.getMyPlanets())

      const data = []
      for (let page = 1; page <= 6; page++) {
        const resp = await api.get(endpoint.newPlanets(page))

        const { results } = resp
        for (let i = 0; i <= results.length; i++) {
          if (results[i] !== undefined) {
            data.push(results[i])
          }
        }
      }

      dispatch(Actions.planets.getMyPlanetsSuccess(data))
    } catch (error) {
      dispatch(Actions.planets.getMyPlanetsError(error))
    }
  }
}

export const getNewVehicles = () => {
  return async dispatch => {
    try {
      dispatch(Actions.vehicles.getMyVehicles())

      const data = []
      for (let page = 1; page <= 4; page++) {
        const resp = await api.get(endpoint.newVehicles(page))

        const { results } = resp
        for (let i = 0; i <= results.length; i++) {
          if (results[i] !== undefined) {
            data.push({
              name: results[i].name,
              url: results[i].url,
            })
          }
        }
      }

      dispatch(Actions.vehicles.getMyVehiclesSuccess(data))
    } catch (error) {
      dispatch(Actions.vehicles.getMyVehiclesError(error))
    }
  }
}

export const getNewFilms = () => {
  return async dispatch => {
    try {
      dispatch(Actions.films.getMyFilms())
      const data = []
      const resp = await api.get(endpoint.newFilms())
      const { results } = resp
      for (let i = 0; i <= results.length; i++) {
        if (results[i] !== undefined) {
          data.push({
            title: results[i].title,
            url: results[i].url,
          })
        }
      }

      dispatch(Actions.films.getMyFilmsSuccess(data))
    } catch (error) {
      dispatch(Actions.films.getMyFilmsError(error))
    }
  }
}

// userFilms
// for (let i = 1; i <= films.length; i++) {
//   const resp = await api.get(films[i])
// }
// console.log(data)

// export const getNewPlanets = ({ page }) => {
//   return async dispatch => {
//     try {
//       dispatch(Actions.planets.getMyPlanets())

//       const resp = await api.get(endpoint.newPlanets(page))
//       dispatch(Actions.planets.getMyPlanetsSuccess(resp))
//     } catch (error) {
//       dispatch(Actions.planets.getMyPlanetsError(error))
//     }
//   }
// }
// export const getNewUsers = () => {
//   return async dispatch => {
//     try {
//       dispatch(Actions.users.getMyUsers())

//       const resp = await api.get(endpoint.newUsers())
//       dispatch(Actions.users.getMyUsersSuccess(resp))
//     } catch (error) {
//       dispatch(Actions.users.getMyUsersError(error))
//     }
//   }
// }

export default getNewUsers
