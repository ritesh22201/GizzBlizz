import logo from './logo.svg';
import './App.css';
import ChartHorizontal from './pages/ChartHorizontal';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
