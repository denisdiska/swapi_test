const ENDPOINT = {
  newUsers: page => `/people/?page=${page}`,
  newPlanets: page => `/planets/?page=${page}`,
  newVehicles: page => `/vehicles/?page=${page}`,
  newFilms: () => `/films`,
}

export default ENDPOINT
