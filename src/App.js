import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AlexaSpeakerPage from './AlexaSpeakerPage';
import ElectricCelloPage from './ElectricCelloPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/alexa' component={AlexaSpeakerPage}/>
        <Route path='/cello' component={ElectricCelloPage}/>
      </div>
    )
  }
}

export default App;