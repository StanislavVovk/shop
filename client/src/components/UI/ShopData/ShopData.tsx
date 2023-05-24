import type { FC } from 'react';
import style from './shopData.module.css'
import { Button } from 'react-bootstrap';
export const ShopData: FC = () => {
  return (
    <div className={style.ShopItem}>
      <Button variant={'outline-secondary'}>bURGER KING</Button>
    </div>
  );
};
