import "./App.css";
import "./index.css";
import NavBar from "./components/molecules/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-dark text-silver pt-16">
      <NavBar />
      <main className="container mx-auto px-8">
        {/* Contenido principal irá aquí */}
      </main>
    </div>
  );
}

export default App;
