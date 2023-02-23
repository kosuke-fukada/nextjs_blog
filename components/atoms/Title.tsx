import styles from '../../styles/atoms/Title.module.scss'
import { Title as TitleType } from '../../types/atoms/Title'

const Title = (props: { title: TitleType }): JSX.Element => {
  return (
    <div>
      <p className={styles.title}>
        { props.title.toString() }
      </p>
    </div>
  )
}

export default Title