import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Fruits from '../Fruits/Fruits';
import FruitDetails from '../FruitDetails/FruitDetails';

function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/" className="nav">Fruits</NavLink>
      </nav>
      <h1>Fruit List</h1>
      <Routes>
        <Route path="/" element={<Fruits />}>
          <Route path="fruits/:id" element={<FruitDetails />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;