import React, {Component} from 'react'


class Shelf extends Component{
    constructor(){
        super()
        this.state={
            items: []
        }
    }

    render(){
        return(
            <div className="shelfSidebar">
                <div className ="shelfHeader">
                <h2>My Treasure Shelf</h2>
                <hr/>
                </div>
                <div>{this.props.list}</div>
            </div>
        )
    }
}
export default Shelf