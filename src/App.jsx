import { HashRouter } from "react-router-dom";
import { PathProvider } from "./context/pathContext";
import "./App.css";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  return (
    <div id="container">
      <HashRouter>
        <PathProvider>
          <AnimatedRoutes />
        </PathProvider>
      </HashRouter>
    </div>
  );
}

export default App;
