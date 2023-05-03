import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Portfolio } from './components/portfolio';
import { getSuggestedQuery } from '@testing-library/react';

function App() {
  return (
    <div style={{backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center"}}>
      <Navbar/>

    </div>
  );
}

export default App;
