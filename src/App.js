import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Aside from './Aside';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Section></Section>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
