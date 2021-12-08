import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

export const getStories = async () => {
  const config = {
    method: 'get',
    url: `${baseUrl}/story`,
    headers: {},
  }

  const response = await axios(config)
  return response.data
}

export const getStory = async (id) => {
  const config = {
    method: 'get',
    url: `${baseUrl}/story/${id}`,
    headers: {},
  }

  const response = await axios(config)
  return response.data
}

// export const getRecommendation = async (id, recId) => {
//   const config = {
//     method: 'get',
//     url: `${baseUrl}/cities/${id}/recommendations/${recId}`,
//     headers: {},
//   }

//   const response = await axios(config)
//   console.log()
//   return response.data
// }

export const getUserName = async (id) => {
  const config = {
    method: 'get',
    url: `${baseUrl}/users/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }

  const response = await axios(config)
  return response.data
}

export const editUser = async (id, data) => {
  const config = {
    method: 'put',
    url: `${baseUrl}/users/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    data,
  }

  const response = await axios(config)
  return response.data
}

// export const addCityRecommendation = async (id, data) => {
//   const config = {
//     method: 'post',
//     url: `${baseUrl}/cities/${id}/recommendations`,
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//     data,
//   }

//   console.log(config)

//   const response = await axios(config)
//   console.log(response)
//   return response.data
// }

// export const editCityRecommendation = async (id, recId, data) => {
//   const config = {
//     method: 'put',
//     url: `${baseUrl}/cities/${id}/recommendations/${recId}`,
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//     data,
//   }

//   console.log(config)

//   const response = await axios(config)
//   console.log(response)
//   return response.data
// }

// export const deleteCityRecommendation = async (id, recId) => {
//   const config = {
//     method: 'delete',
//     url: `${baseUrl}/cities/${id}/recommendations/${recId}`,
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//   }

//   console.log(config)

//   const response = await axios(config)
//   console.log(response)
//   return response.data
// }

// export const addRating = async (id, recId, data) => {
//   const config = {
//     method: 'post',
//     url: `${baseUrl}/cities/${id}/recommendations/${recId}`,
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//     data,
//   }
//   const response = await axios(config)
//   return response.data
// }

// export const editRating = async (id, recId, ratId, data) => {
//   const config = {
//     method: 'put',
//     url: `${baseUrl}/cities/${id}/recommendations/${recId}/ratings/${ratId}`,
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//     data,
//   }
//   const response = await axios(config)
//   return response.data
// }

export const login = async (data) => {
  return makeAxiosRequest('/auth/login/', data)
}

export const register = (data) => {
  return makeAxiosRequest('/auth/register/', data)
}

const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data)

  const response = await axios(config)
  return response.data
}

export const getAxiosRequestConfig = (requestUrl, data, method = 'post') => {
  // Config object – tells us everything special about the request
  const config = {
    method,
    url: `${baseUrl}${requestUrl}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    // The "payload" or the "body" of the request: the important info we send as JSON
    data,
  }
  return config
}
