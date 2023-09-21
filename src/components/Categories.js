import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: '1',
                    name: 'Up to 99.99$'
                },
                {
                    key: '2',
                    name: '100 - 199.99$'
                },
                {
                    key: '3',
                    name: '200 - 299.99$'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                <p style={{ fontWeight: 'bold' }}>Filters</p>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories