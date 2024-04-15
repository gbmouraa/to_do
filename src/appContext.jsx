import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState([]);
  // state para alternar entre tarefas incompletas, completas ou todas as tarefas
  const [taskFilter, setTaskFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    function getAppStorage() {
      const appStorage = JSON.parse(localStorage.getItem("_todo"));

      if (!appStorage) {
        let data = {
          theme: "light",
          tasks: [],
        };

        localStorage.setItem("_todo", JSON.stringify(data));
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
