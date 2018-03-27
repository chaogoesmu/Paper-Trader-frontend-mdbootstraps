import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarFeatures from './components/NavbarFeatures'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import InfoTab from './components/InfoTab'
import Graphs from './components/Graphs'
import Watching from './components/Watching'
import Footer from './components/Footer'

import FindSymbol from './components/FindSymbol'
import axios from 'axios'

class App extends Component {
  state = {
    companies: []
  }

  // componentDidMount() {
  //   let companyName = 'Hershey'
  //   axios.get(`https://autoc.finance.yahoo.com/autoc?query=${companyName}&region=1&lang=en`)
  //     .then(res => {
  //       const companies = res.data
  //       console.log(companies)
  //       this.setState({ companies })
  //     })
  // }


  render() {
    console.log('hiii');
    return (
      <div className="App">
        <NavbarFeatures />
        <Header />
        <div className="row">
          <div className="col-md-8">
            <Searchbar />
          </div>
          <div className="col-md-4">
            <InfoTab />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Graphs />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Watching />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>

      <FindSymbol />

      </div>
    );
  }
}

export default App;
