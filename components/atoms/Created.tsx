import styles from '../../styles/atoms/Created.module.scss'
import { Created as CreatedType } from '../../types/atoms/Created'

const Created = (props: { created: CreatedType }): JSX.Element => {
  return (
    <span className={styles.created}>{ props.created.toString() }</span>
  )
}

export default Created