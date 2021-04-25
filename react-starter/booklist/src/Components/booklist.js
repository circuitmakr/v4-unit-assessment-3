import React, {Component} from 'react'
import data from '../data'
import Shelf from './shelf'

class Booklist extends Component{
    constructor(){
        super()
        this.state={
           items: data,
           shelf: []
        }
    this.addToShelf = this.addToShelf.bind()
    }
addToShelf(e){
let index = parseInt(e.target.alt)
let selection = []
selection.push(data[index].img, data[index].title, data[index].author)
}
    render(){

        return(
            <div className="booksContainer">
                {this.state.items.map(items =>{
                 return   <div className="books">
                     <a href="#" onClick={this.addToShelf}><img key="image" className="bookImage" src={items.img} alt={items.id}></img></a>
                     <div key="title" className="bookTitle"><h3>{items.title}</h3></div> 
                     <div key="author" className="bookAuthor"><h4>{items.author}</h4></div>
                     </div>
                })}
            </div>
        )
    }
}
export default Booklist