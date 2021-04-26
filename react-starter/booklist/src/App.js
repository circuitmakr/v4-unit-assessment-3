import React, {Component} from 'react'
import Booklist from './Components/booklist'
import Header from './Components/header'
import SearchBar from './Components/searchbar'
import './App.css';
import Shelf from './Components/shelf'
import data from './data'



class App extends Component{
  constructor(props){
  super(props)
  this.state ={
    books: data,
    shelf: [],
    inventory: []
  }
//this.addToShelf = this.addToShelf.bind(this)
}


// addToShelf(e){
// console.log(e)
//   let index = parseInt(e.target.alt)
//   let selection = []
//   selection.push(data[index].img, data[index].title, data[index].author)
//   this.setState({shelf: selection})
//   console.log(selection)
//   }

clearShelf(){}
filterBooks(){}
reset(){}


render(){

    return(
      <div>
      <Header/>
      <SearchBar/>
      <Shelf />
      <Booklist books={[...this.state.books]} choice={this.addToShelf}/>
      </div>
    )
  }
}

export default App
