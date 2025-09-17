import './App.css';
import NavBar from './components/NavBar.js';
import React, { useState } from 'react';
import News from './components/News.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
 let pageSize = 6;
  const [progress, setProgress] = useState(0)
  

    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
            
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App
