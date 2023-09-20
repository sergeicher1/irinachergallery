import React, { useState } from 'react'
import { BsCart, FaShoppingCart } from 'react-icons/fa'
import { CgSmileSad } from 'react-icons/cg'
import { FcMoneyTransfer } from 'react-icons/fc'

import Order from './Order'


const showOrders = (props) => {
    let total = 0
    props.orders.forEach(el => total += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.div} item={el} />
            ))}
            <hr></hr>
            <ul className='totalList'>
                <li>
                    <p className='total'>Total: {new Intl.NumberFormat().format(total)} $</p>
                </li>
                <li>
                    <p className='procced'>To pay <FcMoneyTransfer /></p>
                </li>
                {/* <li>
                    <FcMoneyTransfer className='payMoney' />
                </li> */}
            </ul>
            {/* <p className='total'>Total: {total} $</p>
            <p className='procced'>Click the icon to pay: </p>
            <FcMoneyTransfer className='payMoney' /> */}

        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h1>Nothing yet, please make an order first!</h1>
            <CgSmileSad className='upset' />
        </div>
    )
}
export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <div>
                <ul className='nav'>
                    <li>
                        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'} `} />
                    </li>
                    <li>Account</li>
                    <li>About</li>
                    <li>Cantacts</li>
                </ul>
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
        </header>
    )
}
