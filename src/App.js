import React from 'react';
import SearchBox from './SearchBox';
import './App.css';
import CardList from './CardList';


class App extends React.Component {
  constructor(){
      super()
      this.state = {
          movies : [], 
          searchfield: '',
          searchedMovies:[]   
      }
  }


  onSearchChange=(event)=>{
      
      this.setState({searchfield: event.target.value, searchedMovies:[]})
      fetch(`http://www.omdbapi.com/?s=${this.state.searchfield}&apikey=51d5b5fa`)
      .then(response => response.json()
      )
      .then( response => {
        /* console.log(response) */
        if(response.Search !==undefined){
          
          this.setState({searchedMovies: response.Search, movies: []})
            
          this.state.searchedMovies.map((movie,i)=>{
            fetch(`http://www.omdbapi.com/?i=${this.state.searchedMovies[i].imdbID}&apikey=51d5b5fa`)
              .then(response => response.json()
              )
              .then( response => {
                
                  this.setState({
                    movies: this.state.movies.concat(response)
                  })
                  
                })
                
         })
            
      
        }
      })      
  }

  render() {
    console.log(this.state.searchedMovies)
      return (
      <div className='tc mw9 center ph3-ns'>
          <h1 className='f1 lightest-blue'>Search for a movie </h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList movies = {this.state.movies} />
      </div>

  );}
}

export default App;