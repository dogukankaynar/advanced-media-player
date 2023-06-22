import "./App.css"; 
import {DataProvider} from "./context/DataContext"
import Routes from "./routes/index"

function App() {
  return <div>
    <DataProvider>
      <Routes/>
    </DataProvider>
  </div>;
}

export default App;
