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

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};