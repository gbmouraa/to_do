import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [appStorage, setAppStorage] = useState({ theme: "light", tasks: [] });

  useEffect(() => {
    function getAppStorage() {
      const app = localStorage.getItem("_todo");

      if (!app) return;

      const appData = JSON.parse(app);
      setAppStorage(appData);
    }

    getAppStorage();
  }, []);

  return (
    <AppContext.Provider value={{ appStorage, setAppStorage }}>
      {children}
    </AppContext.Provider>
  );
}
