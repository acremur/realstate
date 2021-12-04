import axios from 'axios'

const baseUrl = 'https://bayut.p.rapidapi.com'

const fetchApi = async url => {
    const { data } = await axios.get(`${baseUrl}/${url}`, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '3fc34cb8b0mshd01829ff39f4debp10bc33jsn0d8cd69f8d98'
        }
    })

    return data
}

export default fetchApi