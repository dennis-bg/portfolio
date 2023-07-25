import './App.css';
import content from './content.json'
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Experience } from './components/experience';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { Contact } from './components/contact';

const portalStyles = {
  position: 'fixed', 
  top: 0,
  right: 0, 
  zIndex: '6000',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
}

function App() {

  return (
    <div style={{backgroundColor: "#f5f5f5", position: 'relative'}}>
      <Navbar links={content.contactInfo}/>
      <div id="portal" style={portalStyles}/>
      <Hero/>
      <Experience experience={content.experience}/>
      <Skills skills={content.skills}/>
      <Projects projects={content.projects}/>
      <Contact contactInfo={content.contactInfo}/>
    </div>
  );
}

export default App;
