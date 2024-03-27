import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <span className="bg-red-500">Hello world!</span>
            </div>
        </Provider>
    );
}

export default App;
