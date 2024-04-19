import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../appContext";

import "./nav.scss";

export default function Nav({ handleFilteredTasks }) {
  const { theme, tasks, setTasks, taskFilter, setFilteredTasks } =
    useContext(AppContext);
  const [itemsLeft, setItemsLeft] = useState(0);
  const appStorage = JSON.parse(localStorage.getItem("_todo"));

  useEffect(() => {
    function getItemsLeft() {
      if (tasks.length === 0) {
        setItemsLeft(0);
        return;
      }

      const incompleteTasks = tasks.filter((item) => item.completed === false);
      setItemsLeft(incompleteTasks.length);
    }

    getItemsLeft();
  }, [tasks, setTasks]);

  function handleClearCompletedTasks() {
    let filteredTasks = tasks.filter((item) => item.completed === false);
    setTasks(filteredTasks);
    appStorage.tasks = filteredTasks;
    localStorage.setItem("_todo", JSON.stringify(appStorage));

    if (taskFilter === "completed") {
      setFilteredTasks([]);
    } else {
      setFilteredTasks(filteredTasks);
    }
  }

  return (
    <nav className={theme}>
      <span>{`${itemsLeft} items left`} </span>
      <div className="navigation">
        <button
          className={taskFilter === "all" ? "active" : ""}
          onClick={() => handleFilteredTasks("all")}
        >
          All
        </button>
        <button
          className={taskFilter === "active" ? "active" : ""}
          onClick={() => handleFilteredTasks("active")}
        >
          Active
        </button>
        <button
          className={taskFilter === "completed" ? "active" : ""}
          onClick={() => handleFilteredTasks("completed")}
        >
          Completed
        </button>
      </div>
      <button className="btn-clear" onClick={handleClearCompletedTasks}>
        Clear completed
      </button>
    </nav>
  );
}
