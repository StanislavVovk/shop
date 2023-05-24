import type { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import style from './footer.module.css'
export const Footer: FC = () => {
  return (
    <footer className={`pt-4 pb-2 ${style.Footer}`}>
      <Container className={'d-flex justify-content-center mb-2'}>
          <span className={style.CopyRight}>
            NotCopyright © {new Date().getFullYear()} Stanislao de Sichesku | All Rights Not Reserved
          </span>
      </Container>
    </footer>
  )
};
