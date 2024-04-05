import { AppContextProvider } from "./appContext";
import Header from "./components/Header";

export default function App() {
  return (
    <AppContextProvider>
      <div>
        <Header />
      </div>
    </AppContextProvider>
  );
}
