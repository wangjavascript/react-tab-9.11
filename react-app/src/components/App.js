import React, { Component } from 'react'

import '../mock'
import axios from 'axios'
import Left from './left'
import Right from './right'

export default class App extends Component {
    state = { data: {}, index: 0 }
    componentDidMount() {
        axios.get('/list').then(({ data }) => {
            this.setState({ ...data })
        })
    }
    fn = (index) => {
        this.setState({ index })
    }
    render() {
        let { name, list } = this.state.data
        let { index } = this.state
        return (
            <div className='box'>
                <Left list={name} fn={this.fn} />
                {
                    list && <Right list={list[index]} />
                }
            </div>
        )
    }
}

