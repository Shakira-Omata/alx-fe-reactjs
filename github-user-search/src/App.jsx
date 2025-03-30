import Search from './components/search';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;