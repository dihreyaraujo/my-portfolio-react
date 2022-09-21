import React from 'react';
import AboutMe from '../components/AboutMe';
import Header from '../components/Header';
import Section from '../components/Section';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Header pag="home" styleHome="home" />
        <Section />
        <AboutMe />
      </div>
    )
  }
}

export default Home
