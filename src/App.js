import Footerz from "./footer";
import Head from "./header";
import Nav from "./navbar";
import './App.css';
import LoadMore from "./loadmore";
import Card from "./ContentCard";

function App() {
  return (
    <div className="App" id="#home">
      <Nav/>
      <Head/>
      <LoadMore/>
      <Footerz/>
    </div>
  );
}

export default App;




