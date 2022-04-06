import {editRecord, getRecord} from '../services/records-api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Edit() {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getRecord(id) // get the record that matches this id
        .then(res => setData(res.data)) //changes state from response from api
    }, []) // square brackets to prevent continuous loop
    
    const editTheRecord = e => {
        e.preventDefault()
        const updatedRecord = {description: e.target.description.value, complete: e.target.complete.checked}
        editRecord(id,updatedRecord)
        nav(`/${id}`)
    }
    return(
        <div>
            <h1>Edit Record</h1>
            <form onSubmit={editTheRecord}>
                Album Title: <input type='text' name='albumtitle' defaultValue={data.description}/><br/>
                Artist: <input type='text' name='artist' defaultValue={data.artist}/><br/>
                Cover Art Link: <input type='text' name='coverart' defaultValue={data.coverart}/><br/>
                Year: <input type='number' name='year' defaultValue={data.year}/><br/>
                Genre: <input type='text' name='genre' defaultValue={data.genre}/><br/>
                <input type='submit' />
            </form>
        </div>
    )
}