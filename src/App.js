import { Provider } from "react-redux";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard></Dashboard>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
