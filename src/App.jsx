import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnglishPage from './Pages/English/English_page';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EnglishPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;