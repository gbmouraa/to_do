import iconMoon from "../../assets/icons/icon-moon.svg";
import iconSun from "../../assets/icons/icon-sun.svg";
import { useContext } from "react";
import { AppContext } from "../../appContext";
import "./header.scss";

export default function Header() {
  const { appStorage, setAppStorage } = useContext(AppContext);

  function toggleTheme() {
    let newAppStorage = { ...appStorage };
    newAppStorage.theme = appStorage.theme === "light" ? "dark" : "light";
    setAppStorage(newAppStorage);
    localStorage.setItem("_todo", JSON.stringify(newAppStorage));
  }

  return (
    <header className={appStorage.theme}>
      <div className="header-content">
        <span className="title">TODO</span>
        <button className="btn-toggle-theme" onClick={toggleTheme}>
          <img
            src={appStorage.theme === "light" ? iconMoon : iconSun}
            alt="Icon"
          />
        </button>
      </div>
    </header>
  );
}
