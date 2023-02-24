import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from '../../styles/molecules/Header.module.scss'
import SideMenu from './SideMenu'
import { MenuListItem } from '../../types/molecules/MenuListItem'

const Header = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)
  const nodeRef = useRef(null)
  const menuList: Array<MenuListItem> = [
    new MenuListItem(
      'hogehoge',
      '/hogehoge'
    ),
    new MenuListItem(
      'fugafuga',
      '/fugafuga'
    ),
  ]
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Blog title.</h1>
      <button className={styles.menu_bars} onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} size='xs' />
      </button>
      <CSSTransition
        nodeRef={nodeRef}
        in={open}
        timeout={500}
        classNames="sidemenu_wrapper"
        unmountOnExit
      >
        <div className="sidemenu_wrapper" ref={nodeRef}>
          <SideMenu menuList={menuList} />
        </div>
      </CSSTransition>
    </div>
  )
}

export default Header
