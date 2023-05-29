import type { ChangeEvent, FC, FormEvent } from 'react';
import { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row, Toast } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from 'common/common';
import { getOrders } from 'store/actions';
import style from './historyPage.module.css';
import { Wrapper } from 'components/UI/CardWrapper/Wrapper';

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
    const query = { paramName: selectVal, paramValue: inputVal }
    void await dispatch(getOrders(query))
  }

  return (
    <Container className={'h-100 mt-4 mb-5'}>
      <Row className='h-100 d-flex justify-content-evenly align-items-center'>
        <Col lg={3}>
          <Form className={'d-flex h-100'}
                onSubmit={async (event) => await handleSubmit(event)}>
            <Row>
              <Col lg={12} className={'mb-3'}>
                <Form.Select
                  onChange={handleSelectChange}>
                  <option>Choose parameter</option>
                  <option value="email">Email</option>
                  <option value="phoneNumber">Phone number</option>
                  <option value="_id">ID</option>
                </Form.Select>
              </Col>
              <Col lg={12} className={'mb-3'}>
                <FloatingLabel label={'Write email or phone number or order id'} className={'w-100'}>
                  <Form.Control
                    onChange={handleInputChange}
                    type={'text'}
                    placeholder={'Write here'}
                    className={'w-100'}
                  />
                </FloatingLabel>
              </Col>
              <Col lg={12}>
                <Button type={'submit'}
                        disabled={inputVal === '' || selectVal === '' || selectVal === 'Choose parameter'}>
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col lg={8} className={`p-0 ${style.Wrapper}`}>
          <Toast className={`w-100 ms-3 me-3 overflow-auto ${style.Wrapper}`}>
            <Col lg={12} className={'p-3 h-100'}>
                  <Row xs={1} md={2} lg={2} className={'justify-content-evenly g-4 px-5 h-100'}>
                    {data.length > 0
                      ? data.map((item, index) => <Wrapper key={index} data={item}/>)
                      : <div className={'w-100 h-100 d-flex justify-content-center align-items-center'}>
                        <span className={'fs-1 fw-bold'}>
                          Nothing to show
                        </span>
                    </div>}
                  </Row>
            </Col>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};
