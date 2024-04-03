import axios from 'axios'
const token = JSON.parse(window.localStorage.getItem('user'))?.token
const config = {
  headers: { Authorization: 'Token ' + token }
}

export const createPost = async (payload) => {
  const response = await axios.post('https://geziwmna3v.us-west-2.awsapprunner.com/create-post/', payload, config)
  return response.status === 400 || response.status === 500 ? response.message : response
}

export const getPosts = async () => {
  const response = await axios.get('https://geziwmna3v.us-west-2.awsapprunner.com/post-list/')
  return response.status === 400 || response.status === 500 ? response.message : response
}

export const handlePostReply = async (id, post) => {
  const response = await axios.post(`https://geziwmna3v.us-west-2.awsapprunner.com/create-reply/${id}/`, post, config)
  return response.status === 400 || response.status === 500 ? response.message : response
}

export const createCommunityGroup = async (payload) => {
  const response = await axios.post('https://geziwmna3v.us-west-2.awsapprunner.com/create-community-group/', payload)
  return response.status === 400 || response.status === 500 ? response.message : response
}

export const getCommunities = async () => {
  const response = await axios.get('https://geziwmna3v.us-west-2.awsapprunner.com/community-groups/')
  return response.status === 400 || response.status === 500 ? response.message : response
}

export const likePost = async (id) => {
  const response = await axios.post(`https://geziwmna3v.us-west-2.awsapprunner.com/like/${id}/`)
  return response.status === 400 || response.status === 500 ? response.message : response
}

export const viewPost = async (id) => {
  const response = await axios.post(`https://geziwmna3v.us-west-2.awsapprunner.com/view/${id}/`)
  return response.status === 400 || response.status === 500 ? response.message : response
}

export const sharePost = async (id) => {
  const response = await axios.post(`https://geziwmna3v.us-west-2.awsapprunner.com/share/${id}/`)
  return response.status === 400 || response.status === 500 ? response.message : response
}

export const joinGroupCommunity = async (payload) => {
  const response = await axios.post('https://geziwmna3v.us-west-2.awsapprunner.com/join-group/', payload, config)
  return response.status === 400 || response.status === 500 ? response.message : response
}

export const loadGroupCommunityById = async (id) => {
  const response = await axios.get(`https://geziwmna3v.us-west-2.awsapprunner.com/community-groups/${id}/posts/`, config)
  return response.status === 400 || response.status === 500 ? response.message : response
}
