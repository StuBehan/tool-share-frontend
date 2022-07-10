import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/NavBar/Navbar';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
        </header>
      </Router>
    </div>
  );
};

export default App;
