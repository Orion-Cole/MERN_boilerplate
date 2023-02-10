import './App.css';

function App() {
  const testFunction = async () => {
    const response = await fetch('/test_route')
  }
  testFunction()

  return (
    <div className="App">

    </div>
  );
}

export default App;
