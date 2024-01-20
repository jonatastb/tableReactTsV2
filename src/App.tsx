
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppProvider } from './AppProvider'
import { Router } from './Router'

function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
