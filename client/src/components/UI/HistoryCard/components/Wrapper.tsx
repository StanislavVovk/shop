import type { FC } from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
import { UserOrderModel } from '../../../../common/models/UserOrderModel';
import style from '../../../Pages/Shop/shop.module.css';
import { HistoryCard } from '../HistoryCard';

interface IWrapper {
  data: UserOrderModel
}

export const Wrapper: FC<IWrapper> = ({ data }) => {
  return (
    <>
      <Toast className={`w-100 p-0 ${style.ShopItems} overflow-scroll`}>
        <Toast.Body>
          <Row>
            <Col lg={8}>
              {data.order.map((orderData, index) => <HistoryCard key={index} item={orderData.item}/>
              )}
            </Col>
            <Col lg={4} className={'fs-2'}>
              Total Price: {data.totalPrice}$
            </Col>
          </Row>
        </Toast.Body>
      </Toast>
    </>
  );
};
