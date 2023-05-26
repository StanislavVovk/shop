import type { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ShopsItems, ShopsList } from './components/common';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../common/common';
import { getShops } from '../../../store/shop/actions/actions';

export const Shop: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(getShops({}))
  }, [dispatch])

  return (
    <Container className={'h-100 mt-4 mb-5'}>
      <Row className='h-100 d-flex justify-content-evenly align-items-center' >
        <ShopsList/>
        <ShopsItems/>
      </Row>
    </Container>
  );
};
