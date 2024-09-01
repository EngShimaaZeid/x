import Navbar from "./Components/js/Navbar";
import Fcontainer from "./Components/js/Fcontainer";
import Container from "./Components/js/Container";

import Searchbar from  "./Components/js/Searchbar";
import Footer from  "./Components/js/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>

      <Container/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
