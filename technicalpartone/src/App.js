import './App.css';
import ComputeFactorial from './components/ComputeFactorial'
import IsContained from './components/IsContained';
import RandomizeArray from './components/RandomizeArray';
import RegularExpression from './components/RegularExpression';
import RemoveDuplicates from './components/RemoveDuplicates';

function App() {
  return (
    <div className="App">
      <ComputeFactorial />
      <IsContained />
      <RandomizeArray />
      <RemoveDuplicates />
      <RegularExpression />
    </div>
  );
}

export default App;
