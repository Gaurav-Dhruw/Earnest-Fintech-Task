import './App.css'
import { ProviderWrapper } from './contexts/ProviderWrapper'
import { Home } from './pages/Home/Home'

function App() {
  return (
    <>
      <ProviderWrapper>
        <Home />
      </ProviderWrapper>
    </>
  )
}

export default App
