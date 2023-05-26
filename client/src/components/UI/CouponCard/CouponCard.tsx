import { Button, Card, Col, Overlay, Tooltip } from 'react-bootstrap';
import style from '../CartCard/cartCard.module.css';
import { CouponsModel } from '../../../common/models/CouponsModel';
import React, { FC, useRef, useState } from 'react';

export const CouponCard: FC<Omit<CouponsModel, '_id'>> = (item) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const copyTextToClipboard = async () => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(item.codeDisc);
    } else {
      return document.execCommand('copy', true, item.codeDisc);
    }
  }
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard()
      .then(() => {
        // If successful, update the isCopied state value
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Col className={`justify-content-center d-flex ${style.Col}`} lg={3} md={6} xs={12}>
      <Card className={style.Card}>
        <Card.Img variant="top" src={item.imageURL}/>
        <Card.Body>
          <Card.Title className={'fw-bolder fs-2'}>{item.name}</Card.Title>
          <Card.Subtitle className={'fs-4'}>
            Promocode: <strong>{item.codeDisc}</strong>
          </Card.Subtitle>
          <Card.Text className={'fs-3 fw-bold'}>
            {item.discount * 100}%
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button ref={target} onClick={handleCopyClick}>
              Click me!
            </Button>
            <Overlay target={target.current} show={show} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  Copied!
                </Tooltip>
              )}
            </Overlay>
        </Card.Footer>
      </Card>
    </Col>

  );
}
