import type { FC } from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
import style from '../shop.module.css'
import { ShopCard } from 'components/UI/ShopCard/ShopCard';
import { useAppSelector } from 'common/common';

export const ShopsItems: FC = () => {
  const shops = useAppSelector(state => state.shopReducer.shops)
  const shopName = useAppSelector(state => state.shopItemSwitcherReducer.shopName)
  const data = shops?.filter(item => item.name === shopName)
  const mappedData = data?.map((item) => item.items)
  return (
    <Col md={12} xs={12} lg={{ span: 7, offset: 1 }} className={`${style.ColWrapper}`}>
      <Toast className={`w-100 h-100 p-0 ${style.ShopItems}`}>
        <Toast.Body>
          <Row xs={1} md={2} lg={2} className={`justify-content-evenly g-4 px-5 ${style.ShopItemsRow}`}>
              {mappedData?.map((item) => {
                return item.map((data, key) => <ShopCard key={key} item={data}/>)
              })}
          </Row>
        </Toast.Body>
      </Toast>
    </Col>
  );
};
