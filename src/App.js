import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import AlexaSpeakerPage from './AlexaSpeakerPage'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/alexa' component={AlexaSpeakerPage}/>
      </div>
    )
  }
}

export default App;