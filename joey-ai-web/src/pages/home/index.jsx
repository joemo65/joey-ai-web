import * as React from 'react';
import logo from '../../joey-ai-logo.png';

import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Joey AI
        </p>
      </header>
    </div>
  );
}

  export default Home;