import React, { Component } from 'react'

import '../mock'
import axios from 'axios'
import Left from './left'

export default class App extends Component {
    state = {}
    componentDidMount() {
        axios.get('/list').then(({ data }) => {
            this.setState({ ...data })
        })
    }
    render() {
        let {name,list}=this.state
        console.log(name,'----name')
        console.log(this.state,'===1')
        console.log(this.state.data)
        
        console.log(this.state.data, '---name')
        console.log(this.state.data, '---list')


        return (
            <>
                <Left />
            </>
        )
    }
}

