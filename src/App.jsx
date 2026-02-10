import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import CreatePortfolio from './pages/CreatePortfolio';
import ViewPortfolio from './pages/ViewPortfolio';

function App() {
  var [page, setPage] = useState('home');
  var [data, setData] = useState(null);
  function goToPage(pageName) {
    setPage(pageName);
  }

  function saveData(userData) {
    setData(userData);
  }

  return (
    <div className="app">
      {page === 'home' && <Home onNavigate={goToPage} />}
      
      {page === 'create' && <CreatePortfolio onNavigate={goToPage} onSaveData={saveData} />}
      
      {page === 'view' && <ViewPortfolio data={data} onNavigate={goToPage} />}
    </div>
  );
}

export default App;
