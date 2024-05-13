import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Credentials from "./components/credentials";
import Contact from "./components/contact";
import SideNav from "./components/sideNav";

function App() {
  return (
    <div className="black">
      <Navbar />
      <SideNav />
      <Home />
      <Credentials />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
