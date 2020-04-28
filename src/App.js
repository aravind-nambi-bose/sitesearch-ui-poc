import React, {Component} from 'react';
import './App.css';
import SearchInput from "./SearchInput";

class App extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <SearchInput/>
          </header>
        </div>
    );
  }
}

export default App;
