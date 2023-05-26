import type { FC } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { ShopItemModel } from '../../../common/models/ShopItemModel';
import style from './shopCard.module.css'
import { useAppDispatch, useAppSelector } from '../../../common/common';
import { cartSliceActions, IPayload } from '../../../store/cart/cartSlice';

interface IShopCardProps {
  item: ShopItemModel
}

export const ShopCard: FC<IShopCardProps> = ({ item }) => {
  const dispatch = useAppDispatch()
  const { shopName } = useAppSelector(state => state.shopItemSwitcherReducer)
  const { itemMap, cart } = useAppSelector(state => state.cartReducer)

  const { _id, name, description, price, imageURL } = item

  const checkItemInCart = _id in itemMap
  const itemQuantity = checkItemInCart ? cart[itemMap[item._id]].quantity : 0

  const newItem: IPayload = {
    shopName,
    shopItem: {
      item,
      quantity: itemQuantity
    }
  }
  const handleButtonClick = (newItem: IPayload) => {
    if (checkItemInCart) {
      dispatch(cartSliceActions.removeItem(newItem))
    } else {
      dispatch(cartSliceActions.addItem(newItem))
    }
  }

  return (
    <Col className={'justify-content-center d-flex'}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageURL} placeholder={'gege'}/>
        <Card.Body>
          <Card.Title className={'fw-bolder fs-3'}>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <Row className={' p-0 m-0 border-0'}>
            <ListGroup.Item className={'d-flex align-items-center justify-content-evenly ps-0 pe-0'}>
              <Col lg={5} md={5} xs={5} className={'p-0'}>
                <Card.Subtitle className={'fs-5'}>Price: <strong>{price}$</strong></Card.Subtitle>
              </Col>
              <Col md={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
                <Button
                  variant="secondary"
                  className={style.AddButton}
                  onClick={() => handleButtonClick(newItem)}>
                  {checkItemInCart
                    ? <i className="fa-solid fa-trash fa-xl"/>
                    : <i className="fa-solid fa-cart-shopping fa-xl"/>}
                </Button>
              </Col>
            </ListGroup.Item>
          </Row>
        </ListGroup>
      </Card>
    </Col>
  );
};
