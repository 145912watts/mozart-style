import React from 'react';
/*
import "./reset.css";
import './postReset.css';
*/
import './Home.css';
import './App.css';
/*
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Menu from "./Menu";
*/
import Contract from "./Contract";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // menuOpen: false,
      // homeMode: true,
      // contractMode: false
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let centerColumnWidth;
    window.screen.width > 1024 ? centerColumnWidth = window.screen.width * 0.855 : centerColumnWidth = 1024;
    return (
      <div className="App">
        <div className="App-Center-Column" style={{width: centerColumnWidth}}>
          <Contract />
        </div>
      </div>
    );
  }
  /*

  handleClick(e) {
    if (
      e.target.id === "menu-logo-search-span-column-left-burger"
      ||
      e.target.id === "menuContainer-close-icon"
    ) {
      this.setState({
        menuOpen: !this.state.menuOpen
      })
    } else {
      if(this.state.menuOpen) {
        this.setState({
          menuOpen: false
        })
      }
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClick);
  }
  
  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
  }

  render() {
    let centerColumnWidth;
    window.screen.width > 1024 ? centerColumnWidth = window.screen.width * 0.855 : centerColumnWidth = 1024;
    
    return (
      <Router>
        <div className="App">
          <div className="App-Center-Column" style={{width: centerColumnWidth}}>
            <Menu
              centerColumnWidth={centerColumnWidth}
              open={this.state.menuOpen}
            />
            <Header 
              menuOpen={this.state.menuOpen}
            />
            <Route path="/" exact component={Homepage} />
            <Route path="/contract" exact component={Contract} />
          </div>
        </div>
      </Router>
    );
  }
  */
}

export default App;
