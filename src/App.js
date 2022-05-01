import './App.css'
import Container from '@mui/material/Container'
import ListItems from './components/ListItems'

function App() {
  return (
    <div className="App">
      <Container fixed>
        <h1>Elden Ring Items Table</h1>
        <ListItems />
      </Container>
    </div>
  )
}

export default App
