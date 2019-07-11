import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Loader from './components/Loader';
import './App.css';

class App extends Component {

  state = {
    name: '',
    greeting: ''
  }


  


  render() {

    
   
    const handleChange = (event)=> {
      this.setState({ name: event.target.value });
    }
  
    const handleSubmit = (event)=> {
      event.preventDefault();
      fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
        .then(response => response.json())
        .then(state => this.setState(state));
    }

   

    return (
      <div className="App">
                <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
      <Loader />
        <Container id="appContainer">
          <Header />
          <MainContent />
        </Container>
      </div>
    );
  }
  
}

export default App;
