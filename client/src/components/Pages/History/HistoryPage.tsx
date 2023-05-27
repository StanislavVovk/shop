import type { ChangeEvent, FC, FormEvent } from 'react';
import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row, Toast } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../common/common';
import { getOrders, IOrderParam } from '../../../store/history/actions/action';
import style from '../Shop/shop.module.css';
import { Wrapper } from '../../UI/HistoryCard/components/Wrapper';
import { UserOrderModel } from '../../../common/models/UserOrderModel';

const WrapperMapper = (data: UserOrderModel | UserOrderModel[]) => {
  // @ts-expect-error
  if (data.length > 0) {
    if (data.constructor.name !== 'Array') {
      const newData = data as UserOrderModel
      return <Wrapper data={newData}/>
    } else {
      const adaptedData = data as UserOrderModel[]
      return <>{adaptedData.map((item, index) => <Wrapper key={index} data={item}/>)}</>
    }
  }
}

export const HistoryPage: FC = () => {
  const [inputVal, setInputVal] = useState('')
  const [selectVal, setSelectVal] = useState('')
  const data = useAppSelector(state => state.historyReducer.orders)
  const dispatch = useAppDispatch()
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectVal(event.target.value)
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value.trim())
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const query: IOrderParam = { paramName: selectVal, paramValue: inputVal }
    void await dispatch(getOrders(query))
  }

  return (
    <Container className={'h-100 mt-4 mb-5'}>
      <Row className='h-100 d-flex justify-content-evenly align-items-center'>
        <Col lg={6}>
          <Form className={'d-flex h-100'}
                onSubmit={async (event) => await handleSubmit(event)}>
            <Row>
              <Col lg={12} className={'mb-3'}>
                <Form.Select
                  onChange={handleSelectChange}>
                  <option>Choose parameter</option>
                  <option value="username">Name</option>
                  <option value="phoneNumber">PhoneNumber</option>
                  <option value="_id">ID</option>
                </Form.Select>
              </Col>
              <Col lg={12} className={'mb-3'}>
                <FloatingLabel label={'Write name or phone number or order id'} className={'w-75'}>
                  <Form.Control
                    onChange={handleInputChange}
                    type={'text'}
                    placeholder={'Write here'}
                  />
                </FloatingLabel>
              </Col>
              <Col lg={12}>
                <Button type={'submit'}
                        disabled={inputVal === '' || selectVal === '' || selectVal === 'Choose parameter'}>
                  Search
                </Button></Col>
            </Row>
          </Form>
        </Col>
        <Col lg={6}>
          <Toast className='w-100 ms-3 me-3 overflow-auto' style={{ maxHeight: '500px', minHeight: '500px' }} >
            <Col lg={12} className={'mb-3 mt-4 pe-3 ps-3'}>
                  <Row xs={1} md={2} lg={2} className={`justify-content-evenly g-4 px-5 ${style.ShopItemsRow}`}>
                    {data ? WrapperMapper(data) : ''}
                  </Row>
            </Col>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};
