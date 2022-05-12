import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './root';
import { GlobalContextProvider } from './context/globalContext';

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Root />
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
