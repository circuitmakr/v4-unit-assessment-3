import React, {Component} from 'react'


class SearchBar extends Component{
    constructor(){
        super()
            this.state ={
                userinput: '',
            }
            this.clearContents = this.clearContents.bind(this)
            this.updateInput = this.updateInput.bind(this)
        }
    updateInput(e){
        this.setState({userinput: e.target.value})
        console.log(this.state.userinput)
    }

    clearContents(){
        this.setState({userinput: ''})
    }

  
    render(){
        return(
            <header className="searchHeader">
            <div className="searchBox">
            <input value = {this.state.userinput} onChange={this.updateInput} className="searchInput" placeholder="Enter Search Item Here" type="text" />
            </div>
            <div>
            <button className="btnSearch" onClick={this.clearContents}>Search</button>
            </div>
            </header>

        )
    }

}

export default SearchBar