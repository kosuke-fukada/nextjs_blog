import styles from '../../styles/molecules/SideMenu.module.scss'
import { MenuListItem } from '../../types/molecules/MenuListItem'

const SideMenu = (props: { menuList: Array<MenuListItem> }): JSX.Element => {
  return (
    <div className={styles.sidemenu}>
      <ul>
        {
          props.menuList.map((item: MenuListItem, index: number) => {
            return (
              <li key={index}>
                <a href={item.link.toString()}>
                  { item.name.toString() }
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SideMenu