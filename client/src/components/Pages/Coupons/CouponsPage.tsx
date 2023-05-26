import { Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../../../common/common';
import { CouponCard } from '../../UI/CouponCard/CouponCard';

export const CouponsPage = () => {
  const coupons = useAppSelector(state => state.couponReducer.coupons)
  return (
    <Container className={'h-100 mt-4 mb-5'}>
      <Row className='h-100 d-flex justify-content-evenly align-items-center'>
        {coupons?.map((coupon) => <CouponCard key={coupon._id} imageURL={coupon.imageURL} name={coupon.name}
                                                        codeDisc={coupon.codeDisc} discount={coupon.discount}/>)}
      </Row>
    </Container>
  )
}
