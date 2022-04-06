import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getRecord, deleteRecord} from '../services/records-api'

function Record() {
    const nav = useNavigate()
    const {id} = useParams()
    const [record, setRecord] = useState({})
    useEffect(() => {getRecord(id)
        .then(res => setRecord(res.data))
    }, []) 

    const deleteTheRecord = () => {
        deleteRecord(id)
        nav('/')
    }

    return(
        <div>
            <h3>Record: {record.albumtitle}</h3><br/>
            <img src={record.coverart}/><br/>
            Artist: {record.artist}<br/>
            Year: {record.year}<br/>
            Genre: {record.genre}<br/>
            <br/>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheRecord}>Delete</button>
        </div>
    )
}

export default Record