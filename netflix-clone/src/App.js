import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Post/>
    </div>
  );
}

export default App;
