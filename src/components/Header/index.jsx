import iconMoon from "../../assets/icons/icon-moon.svg";
import iconSun from "../../assets/icons/icon-sun.svg";
import { useContext } from "react";
import { AppContext } from "../../appContext";
import "./header.scss";

export default function Header() {
  const { appStorage, setAppStorage, theme, setTheme } = useContext(AppContext);

  function toggleTheme(theme) {
    setTheme(theme);

    let data = { ...appStorage };
    data.theme = theme;

    setAppStorage(data);
    localStorage.setItem("_todo", JSON.stringify(data));
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
