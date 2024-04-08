import { useContext } from "react";
import { AppContext } from "./appContext";
import Header from "./components/Header";
import Todo from "./components/Todo";

export default function App() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`app-container ${theme}`}>
      <Header />
      <Todo />
    </div>
  );
}
