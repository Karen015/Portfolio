
import './App.css';
import Navbar from './nav';
import Projects from './projects';
import MainSection from './home'

function App() {
  return (
    <div className="app">
      <div className="gradient" />
      <div className="content">
        <Navbar />
        <MainSection />
        <Projects />
      </div>
    </div>
  );
}

export default App;
