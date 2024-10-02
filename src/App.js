import './App.css';
import Header from './Header';
import RecipeDetails from './RecipeDetails';
import Search from './Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/recipe" element={<RecipeDetails />} />
      </Routes>
    </Router>
    
  );
}

export default App;
