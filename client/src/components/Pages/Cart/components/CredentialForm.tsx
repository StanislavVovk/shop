import type { SubmitHandler } from 'react-hook-form';
import { useRef, useState } from 'react';
import { Alert, Col, Form } from 'react-bootstrap';
import { InputComponent } from 'components/UI/common';
import {
  ENV,
  OrderDefaultPayload,
  OrderPayloadEnum,
  orderValidationSchema,
  useAppDispatch,
  useAppForm,
  useAppSelector
} from 'common/common'
import { sendOrder, verifyRecaptcha } from 'store/actions';
import { UserOrderModel } from 'common/models/common';
import ReCAPTCHA from 'react-google-recaptcha';

interface IFormValue {
  name: string
  address: string
  email: string
  phoneNumber: string
}

export const CredentialForm = () => {
  const dispatch = useAppDispatch()
  const { cart, totalPrice } = useAppSelector(state => state.cartReducer)
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

  const captchaRef = useRef<ReCAPTCHA>(null)

  const handleFormSubmit: SubmitHandler<Record<keyof IFormValue, string>> = async (values) => {
    const { name, email, phoneNumber, address } = values

    const order: UserOrderModel = {
      username: name, email, phoneNumber, address, order: cart, totalPrice
    }

    const token = captchaRef?.current?.getValue()

    if (token) {
      await dispatch(verifyRecaptcha(token))
        .unwrap()
        .then(data => {
          if (data.success) {
            setError('')
            void dispatch(sendOrder(order))
          } else {
            setError('Sorry!! Invalid token');
          }
        })
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
          ref={captchaRef}/>
        {errorCaptcha
          ? (
              errorCaptcha !== ''
                ? (
            <Alert variant={'danger'}>{errorCaptcha}</Alert>
                  )
                : null
            )
          : null}
      </Form>
    </Col>
  );
};
