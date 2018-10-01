import React, { Component } from 'react';
import Header from './componentes/Header';

class App extends Component {

  state = {
    noticias : []
  }

  componentDidMount = () => {
    this.consultarNoticas();
  }
  
  consultarNoticas = () => {
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7b9f01b6bd484ac78484e6b1f1368799';
  
    fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(noticias =>{
      this.setState({
        noticias : noticias.articles
      })
    })
  }


  render() {
    return (
      <div className="App">
        <Header 
          titulo = 'Noticias'
        />
      </div>
    );
  }
}

export default App;
