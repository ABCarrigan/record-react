import {createRecord} from '../services/records-api'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const nav = useNavigate()
    const createTheRecord = e => {
        const record = {
            albumtitle: document.querySelector("#albumtitleform").value,
            artist: document.querySelector("#artistform").value,
            coverart: document.querySelector("#coverartform").value,
            year: document.querySelector("#yearform").value,
            genre: document.querySelector("#genreform").value
        }
        createRecord(record)
        nav('/')
    }
    return(
        <div>
            <h1>Create Record</h1>
            <form onSubmit={createTheRecord}>
                Album Title: <input type='text' name='albumtitle' id="albumtitleform"/><br/>
                Artist: <input type='text' name='artist' id="artistform"/><br/>
                Cover Art Link: <input type='text' name='coverart' id="coverartform"/><br/>
                Year: <input type='number' name='year' id="yearform"/><br/>
                Genre: <input type='text' name='genre' id="genreform"/><br/>
                <input type='submit'/>
            </form>
        </div>
    )
}