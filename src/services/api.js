import axios from 'axios'

const API = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json'
})

export default {
  all() {
    return API.get('/all')  
  }
}