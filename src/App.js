import './App.css';
import content from './content.json'
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Experience } from './components/experience';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { Contact } from './components/contact';

function App() {

  return (
    <div style={{backgroundColor: "#f5f5f5"}}>
      <Navbar links={content.contactInfo}/>
      <Hero/>
      <Experience experience={content.experience}/>
      <Skills skills={content.skills}/>
      <Projects projects={content.projects}/>
      <Contact contactInfo={content.contactInfo}/>
    </div>
  );
}

export default App;
