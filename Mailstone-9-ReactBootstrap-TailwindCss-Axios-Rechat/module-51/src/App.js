
import './App.css';
import { Button } from 'react-bootstrap';
import LineChart from './components/MyLineChart/LineChart';


function App() {
  
  return (
    <div className="App">

      <h2>React with Bootstrap </h2>

      <Button variant="danger">My Button</Button>  
        <LineChart></LineChart>    
     </div>
  );
}

export default App;
