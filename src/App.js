
import "./App.css";
import Footerz from "./components/Footer/footer";
import nav from "./components/navbar";
import head from "./components/header2/header2";



function App() {

  return (
    <div className="App" id="#home">
      <nav setCategory={setCategory} />
        
      <Footerz />
    </div>
  );
}

export default App;