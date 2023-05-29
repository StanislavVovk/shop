import type { FC } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { UserOrderItem } from 'common/models/common';
import { QuantityController } from '../common';
import style from './cartCard.module.css'
export const CartCard: FC<Pick<UserOrderItem, 'item'>> = ({ item }) => {
  return (
      <Col className={`justify-content-center d-flex ${style.Col} p-3`}>
        <Card className={style.Card}>
          <Card.Img variant="top" src={item.imageURL}/>
          <Card.Body>
            <Card.Title className={'fw-bolder fs-3'}>{item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
              <ListGroup.Item className={'d-flex align-items-center justify-content-evenly ps-0 pe-0'}>
                <Row className={' m-0 border-0 d-flex align-content-center ps-0 pe-0 w-100 h-100'}>
                <Col lg={{ span: 5, offset: 1 }} md={{ span: 5, offset: 1 }} xs={6} className={'p-0 h-100 text-center align-items-center d-flex justify-content-center'}>
                  <Card.Subtitle className={'fs-6 '}>Price: <strong>{item.price}$</strong></Card.Subtitle>
                </Col>
                <Col lg={5} md={5} xs={6}>
                  <QuantityController item={item}/>
                </Col>
                </Row>
              </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

  );
};
