import React, { Component } from 'react'
import FilterLink from '../container/FilterLink'

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p>
                Show: {" "}
                <FilterLink filter="SHOW_ALL">ALL</FilterLink>
                {", "}
                <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
                {", "}
                <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </p>
        )
    }
}