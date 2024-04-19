import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [appStorage, setAppStorage] = useState(
    () =>
      JSON.parse(localStorage.getItem("_todo")) || {
        theme: "light",
        tasks: [],
      }
  );
  const [theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState([]);
  // state para alternar entre tarefas incompletas, completas ou todas as tarefas
  const [taskFilter, setTaskFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    function getAppStorage() {
      const storageData = JSON.parse(localStorage.getItem("_todo"));

      if (!storageData) {
        localStorage.setItem("_todo", JSON.stringify(appStorage));
        return;
      }

      setTheme(appStorage.theme);
      setTasks(appStorage.tasks);
      setFilteredTasks([...appStorage.tasks]);
    }

    getAppStorage();
  }, []);

  return (
    <AppContext.Provider
      value={{
        appStorage,
        setAppStorage,
        theme,
        setTheme,
        tasks,
        setTasks,
        taskFilter,
        setTaskFilter,
        filteredTasks,
        setFilteredTasks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
