import React, { Component } from 'react'

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='fullItem'>
                <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}$</b>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)} style={{ fontWeight: 900 }}>+ Add to cart</div>

            </div>
        )
    }
}

export default ShowFullItem