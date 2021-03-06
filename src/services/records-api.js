import axios from 'axios'

export const getRecords = () => {
    const URL = 'http://localhost:3001/records'
    const response = axios.get(URL)
    return response
}

export const getRecord = (id) => {
    const URL = `http://localhost:3001/records/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteRecord = (id) => {
    const URL = `http://localhost:3001/records/${id}`
    const response = axios.delete(URL)
    return response
}

export const createRecord = (record) => {
    const URL = `http://localhost:3001/records`
    const response = axios.post(URL, record)
    return response
}

export const editRecord = (id, updatedRecord) => {
    const URL = `http://localhost:3001/records/${id}`
    const response = axios.put(URL, updatedRecord)
    return response
}