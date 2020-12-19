import './App.css';
import {store} from '/Users/magdascomputer/Desktop/ASU 7/Graduation/GRADUATIONPROJECT/Almerce/frontend/MainProjectFolders/FrontEndDivions/4-Redux/Store'
function App() {
  return (
    <div className="App">
     {store.subscribe(()=>console.log(store.getState()))}
    </div>
  );
}

export default App;
