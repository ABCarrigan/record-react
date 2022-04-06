import {getRecords} from '../services/records-api'
import {useState, useEffect} from 'react'
import Create from './Create'
export default function Records() {
 const [records, setRecords] = useState([])
 useEffect(()=>{
     getRecords()
     .then(res => setRecords(res.data))
 },[])
 console.log(records)
    return(
    <div>
        <ul>
        {records.map((record) => {
            return (
            <li><a href={`/${record._id}`}>{record.albumtitle}</a>
            </li>
            )
        })}
        
        </ul>
        <Create />
    </div>
)
    
}