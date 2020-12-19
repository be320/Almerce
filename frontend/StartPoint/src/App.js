import './App.css';
import store from './FrontEndDivions/4-Redux/Store'
function App() {
  return (
    <div className="App">
     {store.subscribe(()=>console.log(store.getState()))}
    </div>
  );
}

export default App;
