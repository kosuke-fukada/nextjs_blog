import styles from '../../styles/molecules/SideMenu.module.css'

const SideMenu = (props: {
  menuList: Array<{
    title: string,
    link: string
  }>
}): JSX.Element => {
  return (
    <div className={styles.sidemenu}>
      <ul>
        {
          props.menuList.map((item: {
            title: string,
            link: string
          }, index: number) => {
            return (
              <li key={index}>
                <a href={item.link}>
                  { item.title }
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