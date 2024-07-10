import { useState } from 'react';
import './App.css';
import TripList from './components/TripList/index';
function App() {
  let [show, setHide] = useState(true);
  return (
   <>
    <button onClick={() => setHide(false)}>Hide</button>
     {show && <TripList />}
   </>
  );
}

export default App;
