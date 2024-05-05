import { Link } from "react-router-dom";
import styles from "../styles/hero.module.css";

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <Link to="/">Posts List</Link>
      <Link to="/new">New Post</Link>
    </nav>
  );
}
