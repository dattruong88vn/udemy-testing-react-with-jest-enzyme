import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FirstPerson, SecondPerson, PersonSwitcher } from './components';
import './index.css';

const App = () => (
  <BrowserRouter>
    <PersonSwitcher />
    <Routes>
      <Route path="/">
        <Route index path="first-person" element={<FirstPerson />} />
        <Route path="second-person" element={<SecondPerson />}  />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;