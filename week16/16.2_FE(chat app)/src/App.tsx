import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { Landing } from './pages/landing';
import { Chatpage } from './pages/chatpage';

function App() {
  return <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/chat' element={<Chatpage />} />
      </Routes>
    </BrowserRouter>
}

export default App
