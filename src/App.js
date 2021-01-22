import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BusList from './components/BusList';
import Navbar from './components/Navbar';
import BusContextProvider from './contexts/BusContext';
import TabContextProvider from './contexts/TabContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <TabContextProvider>
          <Navbar />
          <BusContextProvider>
          <BusList />
          </BusContextProvider>
          </TabContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
