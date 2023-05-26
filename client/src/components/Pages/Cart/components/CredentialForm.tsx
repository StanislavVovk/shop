import type { FC } from 'react';
import React, { useRef, useState } from 'react';
import { Alert, Col, Form } from 'react-bootstrap';
import { InputComponent } from 'components/UI/common';
import { OrderPayloadEnum } from 'common/contants/OrderPayloadEnum';
import { useAppDispatch, useAppForm, useAppSelector } from 'common/hooks/hooks';
import { orderValidationSchema } from 'common/validationShema/OrderSchema/orderValidationSchema';
import { OrderDefaultPayload } from 'common/contants/OrderDefaultPayload';
import { SubmitHandler } from 'react-hook-form';
import { sendOrder } from '../../../../store/cart/actions/actions';
import { UserOrderModel } from '../../../../common/models/UserOrderModel';
import ReCAPTCHA from 'react-google-recaptcha';
import { ENV } from '../../../../common/enums/ENV/env';
import { recaptchaActions } from '../../../../store/recaptcha/recaptchaSlice';
import { verifyRecaptcha } from '../../../../store/recaptcha/actions/actions';

interface IFormValue {
  name: string
  address: string
  email: string
  phoneNumber: string
}

export const CredentialForm: FC = () => {
  const dispatch = useAppDispatch()
  const {
    control,
    errors,
    handleSubmit
  } = useAppForm({
    mode: 'all',
    defaultValues: OrderDefaultPayload,
    validationSchema: orderValidationSchema
  })
  const [errorCaptcha, setError] = useState('')
  const captchaRef = useRef(null)
  const { cart, totalPrice } = useAppSelector(state => state.cartReducer)
  const handleFormSubmit: SubmitHandler<Record<keyof IFormValue, string>> = async (values) => {
    const { name, email, phoneNumber, address } = values

    const order: UserOrderModel = {
      username: name, email, phoneNumber, address, order: cart, totalPrice
    }
    // @ts-expect-error
    const token = captchaRef.current.getValue()
    if (token) {
      const validToken = await dispatch(verifyRecaptcha(token))
      // @ts-expect-error
      if (validToken.payload.status === 200) {
        setError('Need to verify by Captcha')
        void dispatch(sendOrder(order))
      } else {
        console.error('Sorry!! Token invalid');
      }
    } else {
      setError('Need to verify by Captcha')
    }
  }

  return (
    <Col lg={{ span: 5 }} md={12} xs={12}>
      <Form
        autoComplete={'on'}
        name={'orderForm'}
        id={'orderForm'}
        onSubmit={(handleSubmit(handleFormSubmit))}
      >
        <InputComponent
          name={OrderPayloadEnum.NAME}
          control={control}
          errors={errors}
          labelText={'Name'}
          placeholder={'Name'}
          className={'mb-3'}
        />
        <InputComponent
          name={OrderPayloadEnum.EMAIL}
          control={control}
          errors={errors}
          labelText={'Email'}
          placeholder={'Email'}
          className={'mb-3'}
        />
        <InputComponent
          name={OrderPayloadEnum.PHONE}
          control={control}
          errors={errors}
          type={'tel'}
          labelText={'Phone number'}
          placeholder={'Phone number'}
          className={'mb-3'}
        />
        <InputComponent
          name={OrderPayloadEnum.ADDRESS}
          control={control}
          errors={errors}
          labelText={'Address'}
          placeholder={'Address'}
          className={'mb-3'}
        />
        <ReCAPTCHA
          sitekey={ENV.SITE_KEY as string}
          onClick={() => dispatch(recaptchaActions.addRecaptchaRef(captchaRef.current))}
          ref={captchaRef}/>
        {errorCaptcha !== '' && <Alert variant={'danger'}>{errorCaptcha}</Alert>}
      </Form>
    </Col>
  );
};
