import Routes from "./Routes";
import { useModeContext } from "./contexts/ModeContext";
import { Navbar, Footer } from "../src/components";
import "./styles/_main.scss";

function App() {
  const { darkMode } = useModeContext();
  return (
    <main className={`App ${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <Routes />
      <Footer />
    </main>
  );
}

export default App;
