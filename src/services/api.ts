import axios from 'axios'

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
})
const createAccount = async (name: string, email: string, password: string) => {
  try {
    const response = await client.post('/users', {
      name,
      email,
      password
    })

    console.log(response.data)

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
const login = async (email: string, password: string) => {
  try {
    const response = await client.post('/login', {
      email,
      password
    })

    if (response.status == 200) {
      sessionStorage.setItem('token', response.data.data.token)
    }

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export { login, createAccount }
