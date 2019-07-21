import React from 'react';
import Header from './Header/Header';
import Map from './Map/Map';
import Slider from './Slider/Slider'
import AudioPlayer from './AudioPlayer/AudioPlayer';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Map/>
      <Slider/>
      <AudioPlayer/>
      <Footer/>
    </div>
  );
}

export default App;
