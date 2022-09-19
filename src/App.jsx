import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Componentes
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Explorer } from './pages//explorer/Explorer'
import { MenuPublication } from './components/MenuPublication/MenuPublication'
import { PublicationProvider } from './components/contexts/PublicationContext'

function App() {
  return (
    <div className="App">
      <PublicationProvider>
        <Router>
          <MenuPublication />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/explorer' element={<Explorer />} />
          </Routes>
        </Router>
      </PublicationProvider>
    </div>
  )
}

export default App
