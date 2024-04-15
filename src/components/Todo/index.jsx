import { useContext, useRef } from "react";
import { AppContext } from "../../appContext";
import { Reorder } from "framer-motion";
import Nav from "../Nav";
import iconAdd from "../../assets/icons/icon-add.svg";
import iconCheck from "../../assets/icons/icon-check.svg";
import iconCross from "../../assets/icons/icon-cross.svg";
import "./todo.scss";

export default function Todo() {
  const { theme, tasks, setTasks, filteredTasks, setFilteredTasks } =
    useContext(AppContext);
  const appStorage = JSON.parse(localStorage.getItem("_todo"));

  const inputRef = useRef(null);

  function handleNewTask() {
    if (!inputRef.current.value.trim()) return;

    let newTask = {
      id: new Date(),
      content: inputRef.current.value,
      completed: false,
    };

    let newTaskList = [];
    if (Boolean(tasks) === false) {
      newTaskList.push(newTask);
    } else {
      newTaskList = [...tasks, newTask];
    }

    setTasks(newTaskList);
    setFilteredTasks(newTaskList);
    appStorage.tasks = newTaskList;

    localStorage.setItem("_todo", JSON.stringify(appStorage));

    inputRef.current.value = "";
  }

  function handleCompleted(taskID) {
    let newTaskState = [...tasks];
    const currentTask = tasks.find((item) => item.id === taskID);

    if (currentTask.completed === true) {
      newTaskState[tasks.indexOf(currentTask)].completed = false;
    } else {
      newTaskState[tasks.indexOf(currentTask)].completed = true;
    }

    setTasks(newTaskState);
    appStorage.tasks = newTaskState;
    localStorage.setItem("_todo", JSON.stringify(appStorage));
  }

  function handleDelete(taskID) {
    let filteredTasks = tasks.filter((item) => item.id !== taskID);
    setTasks(filteredTasks);
    setFilteredTasks(filteredTasks);

    appStorage.tasks = filteredTasks;
    localStorage.setItem("_todo", JSON.stringify(appStorage));
  }

  return (
    <div className="todo-container">
      <div className={`input-wrapper ${theme}`}>
        <button className="btn-add" onClick={handleNewTask}>
          <img src={iconAdd} alt="icon" />
        </button>
        <input
          className={`input-new-todo ${theme}`}
          type="text"
          placeholder="Create a new todo..."
          ref={inputRef}
        />
      </div>

      <div className={`todo-wrapper ${theme}`}>
        {/* tasks to show */}
        {filteredTasks && (
          <Reorder.Group
            axis="y"
            values={filteredTasks}
            onReorder={setFilteredTasks}
            className="todos"
          >
            {filteredTasks.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                className={`todo-item ${item.completed ? "completed" : ""}`}
              >
                <button
                  className="btn-complete"
                  onClick={() => handleCompleted(item.id)}
                >
                  <img src={iconCheck} alt="icon" />
                </button>
                <span>{item.content}</span>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(item.id)}
                >
                  <img src={iconCross} alt="icon" />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        )}
      </div>

      <Nav />
    </div>
  );
}
