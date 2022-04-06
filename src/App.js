import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Records from './components/Records'
import Record from './components/Record'
import Edit from './components/EditRecord';

function App() {
  
  return (
    <div className="App">
      <h2>Record List</h2>
      <Router>
        <Routes>
          <Route path='/' element={<Records />}/>
          <Route path='/:id' element={<Record />}/>
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
        <nav><Link to='/' >Home</Link></nav>
      </Router>
    </div>
  )
}

export default App