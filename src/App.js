import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio!</h1>
        <p>
          Hi, I'm Emma, a Computer Science & Psychology student passionate about software development.
        </p>
        <p>
          Explore my projects and skills below.
        </p>
        <button onClick={() => window.location.href = "#projects"}>View Projects</button>
      </header>
    </div>
  );
}

export default App;
