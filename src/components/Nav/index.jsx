import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../appContext";

import "./nav.scss";

export default function Nav() {
  const {
    theme,
    tasks,
    setTasks,
    taskFilter,
    setTaskFilter,
    setFilteredTasks,
  } = useContext(AppContext);
  const [itemsLeft, setItemsLeft] = useState(0);

  function handleFilteredTasks(filter) {
    setTaskFilter(filter);
    let filteredTasks;

    if (filter === "all") {
      setFilteredTasks([...tasks]);
      return;
    }

    if (filter === "active") {
      filteredTasks = tasks.filter((item) => item.completed === false);
      setFilteredTasks(filteredTasks);
      return;
    }

    if (filter === "completed") {
      filteredTasks = tasks.filter((item) => item.completed === true);
      setFilteredTasks(filteredTasks);
    }
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

  function handleClearCompletedTasks() {
    let filteredTasks = tasks.filter((item) => item.completed === false);
    setTasks(filteredTasks);
    setFilteredTasks(filteredTasks);
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
