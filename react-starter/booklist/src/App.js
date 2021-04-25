import React, {Component, useState} from 'react'
import Booklist from './Components/booklist'
import Header from './Components/header'
import SearchBar from './Components/searchbar'
import './App.css';
import Shelf from './Components/shelf'



class App extends Component{
  constructor(props){
  super(props)
  this.state ={
    titles: [],
    shelf: []
  }
}
addToShelf(){}
clearShelf(){}
filterBooks(){}
reset(){}


render(){
    return(
      <div>
      <Header/>
      <SearchBar/>
      <Shelf />
      <Booklist />
      </div>
    )
  }
}

export default App
