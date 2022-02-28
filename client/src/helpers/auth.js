export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const setToken = (token) => {
  window.localStorage.setItem('token', token)
}

export const removeToken = () => {
  window.localStorage.removeItem('token')
}

export const getUserId = () => {
  return window.localStorage.getItem('num')
}

export const setUserId = (num) => {
  window.localStorage.setItem('num', num.toString())
}

export const removeUserId = () => {
  window.localStorage.removeItem('num')
}
