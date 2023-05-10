import './App.css';
import content from './content.json'
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Experience } from './components/experience';
import { Projects } from './components/projects';

function App() {
  return (
    <div style={{backgroundColor: "#f5f5f5"}}>
      <Navbar/>
      <Hero/>
      <Experience experience={content.experience}/>
      <Projects projects={content.projects}/>
    </div>
  );
}

export default App;
