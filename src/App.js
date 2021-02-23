import "./App.css";
import UserListComponent from "./components/UserListComponent";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <UserListComponent />
      </Provider>
    </>
  );
}

export default App;
