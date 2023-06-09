import { useAppDispatch, useAppSelector } from 'common/common'
import type { FC } from 'react'

import style from './order.button.module.css'
import { cartSliceActions } from 'store/cart/cartSlice';
import { CartRequestModel, UserOrderItem } from 'common/models/common';

export const QuantityController: FC<Pick<UserOrderItem, 'item'>> = ({ item }) => {
  const dispatch = useAppDispatch()
  const {
    cart,
    itemMap,
    shopName
  } = useAppSelector(state => state.cartReducer)
  const {
    addItem,
    decreaseItem
  } = cartSliceActions

  const itemQuantity = item._id in itemMap ? cart[itemMap[item._id]].quantity : 0

  const newItem: CartRequestModel = {
    shopName,
    shopItem: {
      item,
      quantity: itemQuantity
    }
  }
  const handleIncreaseClick = (newItem: CartRequestModel) => {
    dispatch(addItem(newItem))
  }
  const handleDecreaseClick = (newItem: CartRequestModel) => {
    dispatch(decreaseItem(newItem))
  }
  return (
    <div className={`ms-auto my-auto ${style.buttonWrapper}`} data-testid='quantity-controller-wrapper'>
      <button
        className={`${style.buttonStyle}`}
        onClick={() => handleDecreaseClick(newItem)}
        disabled={itemQuantity === 0}
        data-testid='descrease-items'
      >
        {itemQuantity === 1
          ? <i className="fa fa-trash" aria-hidden="true" data-testid='qc-trash'/>
          : <i className="fa fa-minus" aria-hidden="true" data-testid='qc-minus'/>}
      </button>
      <span className={`my-auto mx-1 font-weight-light ${style.itemText}`} data-testid='quantity'>
        <strong>{`${itemQuantity}×`}</strong>
      </span>
      <button className={style.buttonStyle} onClick={() => handleIncreaseClick(newItem)} data-testid='inscrease-items'>
        <i className="fa fa-plus" aria-hidden="true" data-testid='qc-plus'/>
      </button>
    </div>
  )
}
