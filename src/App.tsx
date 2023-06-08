import "./App.css"; 
import {DataProvider} from "./context/DataContext"
import Home from "./pages/Home";

function App() {
  return <div>
    <DataProvider>
      <Home/>
    </DataProvider>
  </div>;
}

export default App;
