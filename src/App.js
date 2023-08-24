import { GlobalStyles } from "./styles";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import History from "./pages/History";
import Who from "./pages/Who";
import Album from "./pages/Album";
import Write from "./pages/Write";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Game" element={<Game />}></Route>
          <Route path="/Album" element={<Album />}></Route>
          <Route path="/History" element={<History />}></Route>
          <Route path="/Who" element={<Who />}></Route>
          <Route path="/Write" element={<Write />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}





export default App;
