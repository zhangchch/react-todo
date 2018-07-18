import React, { Component } from 'react'

export default class Link extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let  { children, onClick, active } = this.props;
        if(active) {
            return <span>{ children }</span>
        }
        return (<a href="#" onClick={(e) => {e.preventDefault(); onClick()}}>{ children }</a>)
    }
}