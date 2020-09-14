import React from 'react';
import './App.css';
import Music from "./Music"
import Trap from "./Trap"
import Dubstep from "./Dubstep"
import Hardstyle from "./Hardstyle"
import DrumBass from "./DrumBass"
import FutureBass from "./FutureBass"
import Login from "./login"
import {Route} from "react-router-dom";
import AuthComponent from "./AuthComponent"

function App() {
  return (
    <div className="App">
      <AuthComponent>
        <Route exact path = "/Music" component = {Music} />
        <Route exact path = "/Music/Trap" component = {Trap} />
        <Route exact path = "/Music/Dubstep" component = {Dubstep} />
        <Route exact path = "/Music/Hardstyle" component = {Hardstyle} />
        <Route exact path = "/Music/Drum&Bass" component = {DrumBass} />
        <Route exact path = "/Music/FutureBass" component = {FutureBass} />
      </AuthComponent>
      <Route path = "/login" component = {Login} />
    </div>
  );
}

export default App;
