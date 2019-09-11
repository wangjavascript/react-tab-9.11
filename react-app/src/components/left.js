import React, { Component } from 'react'

export default class left extends Component {
    getID(index) {
        
    }
    render() {
        let { list ,fn } = this.props
        return (
            <div className='left'>
                <ul>
                    {
                        list && list.map((item, index) =>
                            <li onClick={fn.bind(this,index)} key={index}>{item.name}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
