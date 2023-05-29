import type { FC } from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
import { UserOrderModel } from 'common/models/common';
import style from './wrapper.module.css';
import { HistoryCard } from '../HistoryCard/HistoryCard';

interface IWrapper {
  data: UserOrderModel
}

export const Wrapper: FC<IWrapper> = ({ data }) => {
  return (
    <>
      <Toast className={`w-100 p-0 ${style.Wrapper} overflow-scroll`}>
        <Toast.Body>
          <Row className={style.HistoryCardRow}>
            <Col lg={9} md={8} xs={8}>
              <Row xs={1} md={2} lg={2} className={'justify-content-evenly g-4 px-3 '}>
                  {data.order.map((orderData, index) => <HistoryCard key={index} order={orderData}/>
                  )}
              </Row>
              </Col>
              <Col lg={3} className={'fs-2 d-flex justify-content-center flex-wrap'} md={4} xs={4}>
                <span>Total price: <strong>{data.totalPrice}$</strong></span>
              </Col>
          </Row>
        </Toast.Body>
      </Toast>
    </>
  );
};
