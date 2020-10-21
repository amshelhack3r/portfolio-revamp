import React, { useContext } from 'react';
import '../node_modules/antd/dist/antd.min.css'
import './scss/global.scss'
import Header from './components/header';
import Hero from './components/hero';
import ThemeContext, { ThemeProvider } from './state/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext)
  console.log(theme.app);
  return (
    <div className="App" style={theme.app}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
