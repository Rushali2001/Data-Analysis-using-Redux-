import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar";
import UserDetails from "./Components/UserDetails";
import store from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <UserDetails />
      </Provider>
    </>
  );
}

export default App;
