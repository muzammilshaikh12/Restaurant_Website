import React, {useContext} from 'react'

import CartIcon  from '../Cart/CartIcon'

import CartContext from '../../store/cart-context'

import './CartBtn.css'

const CartButton = props => {
    const Cartctx = useContext(CartContext)

    const numOfItems = Cartctx.items.reduce((curNumber,item)=>{
        return curNumber + Number(item.quantity)
    },0)
    return <button className='button' onClick={props.onClick}>
        <span className='icon'><CartIcon /></span>
        <span>Your Cart</span>
        <span className='badge'>{numOfItems}</span>
    </button>
}

export default CartButton