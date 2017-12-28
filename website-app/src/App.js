import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { colors } from './Colors'
import { GraphNode } from './GraphNode'

const appStyle = {
  backgroundColor: colors.Base03
}

const headerStyle = {
  color: colors.Green
};

class App extends React.Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <h1 className="header" style={headerStyle}>This is a header</h1>
        <GraphNode color={colors.Yellow} size="100px"/>
        <GraphNode color={colors.Green} size="200px"/>
        <GraphNode color={colors.Cyan} size="20px"/>
        <GraphNode color={colors.Magenta} size="200px"/>
        <GraphNode color={colors.Orange} size="100px" />
        <GraphNode color={colors.Base01} size="200px" />
      </div>
    );
}
}

export default App;
