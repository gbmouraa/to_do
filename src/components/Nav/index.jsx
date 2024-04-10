import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../appContext";

import "./nav.scss";

export default function Nav() {
  const { theme, tasks, setTasks, tasksFiltered, setTasksFiltered } =
    useContext(AppContext);
  const [itemsLeft, setItemsLeft] = useState(0);

  function handleFilteredTasks(filter) {
    setTasksFiltered(filter);
  }

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

  return (
    <nav className={theme}>
      <span>{`${itemsLeft} items left`} </span>
      <div className="navigation">
        <button
          className={tasksFiltered === "all" ? "active" : ""}
          onClick={() => handleFilteredTasks("all")}
        >
          All
        </button>
        <button
          className={tasksFiltered === "active" ? "active" : ""}
          onClick={() => handleFilteredTasks("active")}
        >
          Active
        </button>
        <button
          className={tasksFiltered === "completed" ? "active" : ""}
          onClick={() => handleFilteredTasks("completed")}
        >
          Completed
        </button>
      </div>
      <button className="btn-clear">Clear completed</button>
    </nav>
  );
}
