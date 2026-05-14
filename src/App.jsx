import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app-main">
        <Portfolio />
      </main>
    </div>
  );
}

export default App;