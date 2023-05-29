import { Container, Row } from 'react-bootstrap';
import { CredentialForm } from './components/CredentialForm';
import { OrderItems } from './components/OrderItems';
import { API_ENUM, useAppSelector } from 'common/common';
import { Navigate } from 'react-router-dom';
import { OrderModal } from 'components/UI/common';

export const CartPage = () => {
  // todo create modal here
  const cart = useAppSelector(state => state.cartReducer.cart);
  return (
    <Container className={'h-100 mt-4 mb-5'}>
      <Row className='h-100 d-flex justify-content-evenly align-items-center' >
        {
          cart.length === 0
            ? <Navigate to={API_ENUM.SHOP}/>
            : <>
              <CredentialForm/>
              <OrderItems/>
            </>
        }
        <OrderModal/>
      </Row>
    </Container>
  );
};
