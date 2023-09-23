import React, { Component } from 'react'
import { TbTrashXFilled } from 'react-icons/tb'

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <ul className='orderItem'>
                    <li>
                        <img src={"./img/" + this.props.item.img} alt={this.props.item.title}/>
                    </li>
                    <li>
                        <h2>{this.props.item.title}</h2>
                    </li>
                    <li>
                        <b>{this.props.item.price}$</b>
                    </li>
                    <li>
                        <TbTrashXFilled className='deleteItem' onClick={() => this.props.onDelete(this.props.item.id)} />
                    </li>
                </ul>
            </div>
        )
    }
}

export default Order