import { BrowserRouter } from "react-router-dom";
import { PathProvider } from "./context/pathContext";
import "./App.css";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <PathProvider>
          <AnimatedRoutes />
        </PathProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
