import type { ChangeEvent, FC } from 'react';
import React from 'react';
import { Col, Spinner, Toast, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import style from '../shop.module.css';
import { useAppDispatch, useAppSelector } from 'common/common';
import { shopItemActions } from 'store/shopItemSwitcher/shopItemSwitcherSlice';

export const ShopsList: FC = () => {
  const { shops, isLoading } = useAppSelector(state => state.shopReducer)
  const dispatch = useAppDispatch()
  const handleSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const data = event.target.value
    dispatch(shopItemActions.selectShop(data))
  }
  const { shopName } = useAppSelector(state => state.cartReducer)

  return (
    <Col md={12} xs={12} lg={4} className={`d-flex justify-content-center ${style.ColWrapper}`}>
      <Toast className={`${style.Tab} d-flex flex-column`}>
        <Toast.Header closeButton={false} className={`justify-content-center  ${style.TabHeader}`}>SHOPS</Toast.Header>
        <Toast.Body className={`d-flex justify-content-center align-items-center ${style.TabBody}`}>
          {isLoading
            ? <Spinner/>
            : <ToggleButtonGroup
              type="radio"
              name="options"
              className="align-content-center w-100 h-100 d-flex flex-column" vertical={true}>
              {shops?.map((shop, index) => <ToggleButton
                id={`radio-${index}`}
                key={index}
                value={shop.name}
                variant={'secondary'}
                size={'lg'}
                disabled={shopName === 'none' ? false : shopName !== shop.name}
                onChange={(event) => handleSelection(event)}
                className={`align-items-center d-flex justify-content-center mb-2 mb-2 ${style.ToggleButton}`}
              >
                {shop.name}
              </ToggleButton>)}
            </ToggleButtonGroup>
          }
        </Toast.Body>
      </Toast>
    </Col>
  );
};
