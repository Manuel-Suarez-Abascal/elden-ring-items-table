import './App.css'
import Container from '@mui/material/Container'
import ItemList from './components/ItemList'

function App() {
  return (
    <div className="App">
      <Container fixed>
        <h1>Elden Ring Items Table</h1>
        <ItemList />
      </Container>
    </div>
  )
}

export default App
