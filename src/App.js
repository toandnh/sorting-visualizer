import logo from './logo.svg';
import './App.css';

import SortingVisualizer from "./sorting-visualizer/visualizer/sortingVisualizer"
import ToolBar from './sorting-visualizer/toolbar/toolbar';

function App() {
  return (
    <div className="App">
      <ToolBar />
      <SortingVisualizer />
    </div>
  );
}

export default App;
