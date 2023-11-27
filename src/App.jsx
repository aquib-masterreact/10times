
import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventForm from './Components/EventForm'
import EventList from './Components/EventList'

function App() {
 

  return (
    <>
      
      <Routes>
        <Route path='/' element={<EventForm/>}/>
        <Route path='/event' element={<EventList/>}/>
      </Routes>
    </>
  )
}

export default App
