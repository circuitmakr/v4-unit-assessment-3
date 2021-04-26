import React, {Component} from 'react'
import data from '../data'


class Booklist extends Component{
    constructor(props){
        super(props)
        this.state={
           items: data,
        }

    }

addToShelf(e){
        console.log(e)
          let index = parseInt(e.target.alt)
          let selection = []
          selection.push(data[index].img, data[index].title, data[index].author)
          this.setState({shelf: selection})
          console.log(selection)
 }
  collection = this.props.books

    render(){
        
        return(
            <div className="booksContainer">
                
                 {this.collection.map(function(item,index,array) {    
                    return <div className="books">
                     <img  key={item.id} className="bookImage" src={item.img} alt={item.id}></img>
                     <div  onClick={(e) => this.addToShelf(e.target.alt)} key="title" className="bookTitle"><h3>{item.title}</h3></div> 
                     <div key="author" className="bookAuthor"><h4>{item.author}</h4></div>
                     </div>
                  
                 })}
             </div>
         )
         
    }

}

export default Booklist