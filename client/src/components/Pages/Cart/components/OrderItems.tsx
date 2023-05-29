import type { ChangeEvent } from 'react';
import { Button, Card, Col, FloatingLabel, Form, Row, Toast } from 'react-bootstrap';
import style from '../../Shop/shop.module.css';
import { useAppDispatch, useAppSelector } from 'common/common';
import { CartCard } from 'components/UI/common';
import { cartSliceActions } from 'store/actions';

// GOD COMPONENT, need to simplify
export const OrderItems = () => {
  const dispatch = useAppDispatch()
  const { cart, totalPrice } = useAppSelector(state => state.cartReducer)

  const { coupons } = useAppSelector(state => state.couponReducer)
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(cartSliceActions.checkTotal({ code: event.currentTarget.value, coupons }))
  }

  return (
    <Col md={12} xs={12} lg={6} className={`${style.ColWrapper} d-flex justify-content-center`}>
      <Row>
        <Toast className='w-100 ms-3 me-3'>
          <Col lg={12} className={'mb-3 mt-4 pe-3 ps-3'}>
            <Toast className={`w-100 p-0 ${style.ShopItems}`}>
              <Toast.Body>
                <Row xs={1} md={2} lg={2} className={`justify-content-evenly g-4 px-5 overflow-scroll ${style.HistoryCardRow} `}>
                  {cart.map((cartItem, key) => {
                    return cartItem && <CartCard key={key} item={cartItem.item}/>
                  })}
                </Row>
              </Toast.Body>
            </Toast>
          </Col>
          <Col lg={12}>
            <Toast className='w-100 mb-4 w-100'>
              <Row className={'w-100'}>
                <Col lg={5} md={12} xs={12} className={'m-2'}>
                  <FloatingLabel label={'Coupon'}>
                    <Form.Control
                      onChange={onChange}
                      placeholder={'Coupon'}
                    />
                  </FloatingLabel>
                </Col>
                <Col lg={6} md={12} xs={12} className={'m-2'}>
                </Col>
              </Row>
              <Row className='w-100 m-0'>
                <Col lg={{ span: 5 }} md={12} xs={12} className={'m-0 mb-2 mt-2 p-0 ps-2 '}>
                  <Card.Subtitle className={'fs-4'}>Total price: <strong>{totalPrice}$</strong></Card.Subtitle>
                </Col>
                <Col lg={{ span: 6 }} md={12} xs={12} className={'d-flex justify-content-center m-0 mb-2 mt-2 p-0 '}>
                  <Button
                    form={'orderForm'}
                    type={'submit'}
                    className={'w-75'}
                  >Buy</Button>
                </Col>
              </Row>
            </Toast>
          </Col>
        </Toast>
      </Row>
    </Col>
  );
}
