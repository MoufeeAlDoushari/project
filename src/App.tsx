import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ArticlePage } from './pages/ArticlePage';
import { AuthorPage } from './pages/AuthorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/article/1" replace />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/author/:id" element={<AuthorPage />} />
      </Routes>
    </Router>
  );
}

export default App;