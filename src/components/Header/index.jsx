import iconMoon from "../../assets/icons/icon-moon.svg";
import iconSun from "../../assets/icons/icon-sun.svg";
import { useContext } from "react";
import { AppContext } from "../../appContext";
import "./header.scss";

export default function Header() {
  const { theme, setTheme } = useContext(AppContext);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <header className={theme}>
      <div className="header-content">
        <span className="title">TODO</span>
        <button className="btn-toggle-theme" onClick={toggleTheme}>
          <img src={theme === "light" ? iconMoon : iconSun} alt="Icon" />
        </button>
      </div>
    </header>
  );
}
