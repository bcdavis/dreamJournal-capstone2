import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { Header } from "./components/Header";
import { FirebaseProvider } from "./components/fbAuth/FirebaseProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <FirebaseProvider>
          <Header />
          <ApplicationViews />
        </FirebaseProvider>
      </Router>

    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
