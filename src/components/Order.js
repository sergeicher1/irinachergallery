import React, { Component } from 'react'
import { LiaSmileSolid } from 'react-icons/lia'
import { TbTrashXFilled } from 'react-icons/tb'
import { FcMoneyTransfer } from 'react-icons/fc'

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <ul className='orderItem'>
                    <li>
                        <img src={"./img/" + this.props.item.img} />
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