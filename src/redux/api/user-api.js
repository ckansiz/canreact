import defaultAxios from 'axios'

const axios = defaultAxios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: { 'Content-Type': 'application/json' }
});

export const getAllUsers = async () => {
    try {
        const users = await axios.get('users')
        return users.data
    } catch (err) {
        return console.error(err)
    }
}
