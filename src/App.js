import './index.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : null}>
      <div className="bg-gray-200 dark:bg-gray-900 dark:text-white">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
