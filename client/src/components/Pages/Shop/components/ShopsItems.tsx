import type { FC } from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
import style from '../shop.module.css'
import { ShopCard } from '../../../UI/ShopCard/ShopCard';

export const ShopsItems: FC = () => {
  return (
    <Col lg={{ span: 7, offset: 1 }} className={`${style.ColWrapper}`}>
      <Toast className={`w-100 h-100 p-0 ${style.ShopItems}`}>
        <Toast.Body>
          <Row xs={1} md={2} lg={2} className={`justify-content-evenly g-4 px-5 ${style.ShopItemsRow}`}>
            <ShopCard/>
            <ShopCard/>
            <ShopCard/>
            <ShopCard/>
            <ShopCard/>
          </Row>
        </Toast.Body>
      </Toast>
    </Col>
  );
};
