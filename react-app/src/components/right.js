import React, { Component } from 'react'

export default class right extends Component {
    render() {
        let { name, title } = this.props.list
        return (
            <div className='right'>
                <h1>{name}</h1>
                <li>{title}</li>
            </div>
        )
    }
}
