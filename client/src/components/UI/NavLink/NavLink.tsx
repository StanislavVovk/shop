import type { FC, ReactElement, ReactNode } from 'react'

import { NavLink } from 'react-router-dom'
import style from './navLink.module.css'

interface INavLinkProps {
  link: string
  children?: ReactElement | number | string | ReactNode
}

export const NavigationLink: FC<INavLinkProps> = ({ link, children }) => {
  const checkActivity = (isActive: boolean): string => {
    return isActive ? style.NavLinkDefault.concat(' ', style.NavLinkActive) : style.NavLinkDefault
  }
  return (
    <NavLink to={link} className={({ isActive }) => checkActivity(isActive)}>
      {children}
    </NavLink>
  )
}
