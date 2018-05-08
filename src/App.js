import React, { Component } from 'react';
import './App.css';

import IntroCard from './Components/IntroCard/IntroCard';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CardList from './Components/CardList/CardList';
import { Sticky, StickyContainer } from 'react-sticky';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    }
  }
  componentDidMount() {
      fetch('https://portfolio-grhervey.herokuapp.com/projects')
      .then(response => response.json())
      .then(data => this.setState({projects: data}))
  }
  render() {
    const {projects} = this.state;
    return (
      !projects.length ?
            <h1 className='loading'>Loading</h1>
            :
            <div className="App">
              <IntroCard />
                <StickyContainer
                    className='sticky--container'
                    >
                    <Sticky>
                      {({style}) => (
                      <Header
                        style={style}
                        />
                      )}
                    </Sticky>
                <div
                  className='page-content'
                  >
                  <p
                    className='about'
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                    <CardList
                      projects = {projects}
                      />


                <Footer
                  className='footer'
                  />

              </div>
              </StickyContainer>
            </div>
    );
  }
}

export default App;
