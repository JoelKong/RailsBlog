import "./App.css";
import styles from "./styles/hero.module.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <Router>
      <div className={styles.header}>
        <h1 className={styles.header_text}>Rails Blog</h1>
        <p className={styles.header_text}>
          A blog made with react frontend and ruby on rails backend
        </p>
        <NavBar />
      </div>
      <AppRoutes />
    </Router>
  );
}

export default App;
