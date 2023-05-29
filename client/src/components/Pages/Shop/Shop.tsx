import { Container, Row } from 'react-bootstrap';
import { ShopsItems, ShopsList } from './components/common';

export const Shop = () => {
  return (
    <Container className={'h-100 mt-4 mb-5'}>
      <Row className='h-100 d-flex justify-content-evenly align-items-center'>
        <ShopsList/>
        <ShopsItems/>
      </Row>
    </Container>
  );
};
