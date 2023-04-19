import './App.css';
import './locale/i18n'
import MyComponentWithTranslation from "./MyComponentWithTranslation";
import {MyComponent} from "./MyComponent";
import {MyComponentNamespace} from "./MyComponentNamspace";
import MyComponentWithTranslationNamespace from "./MyComponentWithTranslationNamespace";

function App() {
  return (
    <div className="App">
            <MyComponent />
            <MyComponentWithTranslationNamespace />
    </div>
  );
}

export default App;
