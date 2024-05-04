// https://medinizebackend.onrender.com/personal-info/

import axios from 'axios'
const token = JSON.parse(window.localStorage.getItem('user'))?.token
const config = {
  headers: { Authorization: 'Token ' + token }
}

export const loadPersonalInfo = async (id) => {
  const response = await axios.get('https://medinizebackend.onrender.com/personal-info/', config)
  return response.status === 400 || response.status === 500 ? response.message : response
}
