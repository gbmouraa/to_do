import iconMoon from "../../assets/icons/icon-moon.svg";
import iconSun from "../../assets/icons/icon-sun.svg";
import { useContext } from "react";
import { AppContext } from "../../appContext";
import "./header.scss";

export default function Header() {
  const { theme, setTheme } = useContext(AppContext);
  const appStorage = JSON.parse(localStorage.getItem("_todo"));

  function toggleTheme(theme) {
    setTheme(theme);
    appStorage.theme = theme;
    localStorage.setItem("_todo", JSON.stringify(appStorage));
  }

  return (
    <header className={theme}>
      <div className="header-content">
        <span className="title">TODO</span>
        <button
          className="btn-toggle-theme"
          onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        >
          <img src={theme === "light" ? iconMoon : iconSun} alt="Icon" />
        </button>
      </div>
    </header>
  );
}
