import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Header } from './components/Header';
import Home from './pages/Home';
import Movie from './pages/MovieDetail';
import Booking from './pages/Booking';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="show/:id" element={<Movie/>}></Route>
        <Route path="/:id/user" element={<Booking/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
