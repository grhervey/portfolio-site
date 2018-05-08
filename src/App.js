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
                    >   Between rock climbing and finishing my computer science degree I have learned how to over come road blocks and that is what is important in being a good developer. I love using Python for data analysis, playing around with recomendation systems and prediction algorithms. I enjoy building applicaitons using JavaScript because it is the the leading technology for consistency between web, mobile, and server side while supporting the open source community with frameworks such as React and React native.
                  </p>

                    <CardList
                      projects = {projects}
                      />



              </div>
                <Footer
                  className='footer'
                  />
              </StickyContainer>
            </div>
    );
  }
}

export default App;
