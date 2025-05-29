import "./App.css";
import Header from "./components/Header";
import Maindashboard from "./components/Maindashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Maindashboard />
      </div>
    </div>
  );
}

export default App;
