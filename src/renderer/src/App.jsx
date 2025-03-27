
import NavBar from './components/navbar.jsx';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Boosters from './views/openbooster.jsx';
import DeckView from './views/deckview.jsx';

function App() {
  

  return (
    <>
    <NavBar/>
    <div>
    <Routes>
      
      <Route path="decks" element={<DeckView />} />
      <Route path="index" element={<Boosters />} />
      <Route path="/" element={<Boosters />}>
    </Route>
  </Routes>
  </div>
  </>
  );
}

export default App
