import { createContext, useState } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState([]);

  return (
    <AppContext.Provider value={{ theme, setTheme, tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
}
