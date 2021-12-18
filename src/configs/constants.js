export const SERVER_ENDPOINT = 'http://localhost:8080/api'

export const API_ENDPOINTS = {
  makes: {
    method: 'GET',
    url: `${SERVER_ENDPOINT}/makes`,
  },
  models: {
    method: 'GET',
    url: `${SERVER_ENDPOINT}/models`,
  },
  vehicles: {
    method: 'GET',
    url: `${SERVER_ENDPOINT}/vehicles`,
  }
};
