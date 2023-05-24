import type { FC } from 'react';
import { Col, Stack, Toast } from 'react-bootstrap';
import style from '../shop.module.css';
import { ShopData } from '../../../UI/ShopData/ShopData';

export const ShopsList: FC = () => {
  return (
    <Col lg={4} className={style.ColWrapper}>
      <Toast className={`${style.Tab} d-flex flex-column`}>
        <Toast.Header closeButton={false} className={`justify-content-center  ${style.TabHeader}`}>SHOPS</Toast.Header>
        <Toast.Body className={`align-items-center ${style.TabBody}`}>
          <Stack gap={4} className={'ms-auto align-items-center h-100 justify-content-center'}>
            <ShopData/>
          </Stack>
        </Toast.Body>
      </Toast>
    </Col>
  );
};
