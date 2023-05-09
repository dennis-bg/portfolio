import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Portfolio } from './components/portfolio';
import { getSuggestedQuery } from '@testing-library/react';
import { SmallGithubSVG } from './svgs/gitHubSVG';
import { Hero } from './components/hero';

function App() {
  return (
    <div style={{backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center", height: "100vh"}}>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
