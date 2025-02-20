import './App.css';
import Projects from './components/Projects'; // Projects Section
import FitnessTracker from './components/FitnessTracker'; // Import Fitness Tracker

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio!</h1>
        <p>Hi, I'm Emma, a Computer Science & Psychology student passionate about software development.</p>
        <p>Explore my projects and skills below.</p>
      </header>

      {/* Projects Section */}
      <Projects />

      {/* Fitness Tracker Section */}
      <FitnessTracker />
    </div>
  );
}

export default App;
