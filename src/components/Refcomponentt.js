import React, { Component, createRef } from 'react'

export class Refcomponentt extends Component {
    constructor(props){
    super(props)
     this.inputRef = createRef()
    }


    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() {
        return (
            <React.Fragment>
                <div style={{marginLeft:"40%"}}>
                <input type="text"ref={this.inputRef}></input>
                <br />
                <input type="text"></input>
                </div>
            </React.Fragment>
        )
    }
}

export default Refcomponentt
