import './App.css';
import './locale/i18n'
import MyComponentWithTranslation from "./MyComponentWithTranslation";
import {MyComponent} from "./MyComponent";
import {MyComponentNamespace} from "./MyComponentNamspace";

function App() {
  return (
    <div className="App">
            <MyComponentNamespace />
    </div>
  );
}

export default App;
