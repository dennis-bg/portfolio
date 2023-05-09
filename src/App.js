import './App.css';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Experience } from './components/experience';
import content from './content.json'

function App() {
  return (
    <div style={{backgroundColor: "#f5f5f5"}}>
      <Navbar/>
      <Hero/>
      <Experience experience={content.experience}/>
    </div>
  );
}

export default App;
