import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage'
import AboutPage from './AboutPage'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
      </div>
    )
  }
}

export default App;