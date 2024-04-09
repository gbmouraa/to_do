import { useContext } from "react";
import { AppContext } from "../../appContext";

import "./nav.scss";

export default function Nav() {
  const { theme } = useContext(AppContext);

  return (
    <nav className={theme}>
      <span>5 items left</span>
      <div className="navigation">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button className="btn-clear">Clear completed</button>
    </nav>
  );
}
