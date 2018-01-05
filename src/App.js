import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AlexaSpeakerPage from './AlexaSpeakerPage';
import ElectricCelloPage from './ElectricCelloPage';
import MidiControllerPage from './MidiControllerPage';
import HomeButton from './Buttons';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/alexa' component={AlexaSpeakerPage} />
          <Route path='/cello' component={ElectricCelloPage} />
          <Route path='/midi' component={MidiControllerPage} />
          <Route component={HomeButton} />
        </Switch>
      </div>
    )
  }
}

export default App;