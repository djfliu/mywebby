import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LazyHomePage, LazyWorks, LazyBirthdayTikTok, LazyJapanMagazine, LoadingSpinner } from './utils/lazyComponents';
import './App.css';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={400}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Routes location={location}>
              <Route path="/" element={<LazyHomePage />} />
              <Route path="/works" element={<LazyWorks />} />
              <Route path="/birthday" element={<LazyBirthdayTikTok />} />
              <Route path="/japan" element={<LazyJapanMagazine />} />
            </Routes>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
