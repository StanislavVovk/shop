import { Button, Modal } from 'react-bootstrap'
import { useAppSelector, useAppDispatch, API_ENUM } from 'common/common'
import { useNavigate } from 'react-router-dom'
import style from './modal.module.css'
import { cartSliceActions, shopItemActions } from 'store/actions';

export const OrderModal = () => {
  const { modalStatus } = useAppSelector(state => state.cartReducer)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleModalClose = () => {
    navigate(API_ENUM.SHOP)
    dispatch(cartSliceActions.clearCart())
    dispatch(shopItemActions.clearSelection())
  }
  return (
    <Modal
      show={modalStatus}
      onHide={handleModalClose}
      size='sm'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={`d-flex align-items-center justify-content-center flex-column ${style.Modal}`}>
        <div className='d-flex justify-content-center align-items-center flex-column h-100'>
          <i className={'fa fa-truck-fast fa-2xl mb-5'}></i>
          <p>Your order will arrive soon</p>
        </div>
        <Button
          className={style.Button}
          variant={'outline-secondary'}
          onClick={handleModalClose}
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>
  )
}
