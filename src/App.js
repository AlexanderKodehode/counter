import './App.css';
import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CounterText from './pages/CounterText';
import CounterTextPage from './pages/CounterTextPage';


function App() {
  const [count, setCount ] = useState(0)
  return (
    <div className="App">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/CounterTextPage"}>Counter</NavLink>

      <CounterText.Provider value={{count, setCount}}>
        <Routes>
            <Route path={"/"} element={<LandingPage/>}/>
            <Route path={"/CounterTextPage"} element={<CounterTextPage/>}/>
        </Routes>
      </CounterText.Provider>

      
    </div>
  );
}

export default App;
