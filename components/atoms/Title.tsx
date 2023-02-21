import styles from '../../styles/atoms/Title.module.scss'

const Title = (props: { title: string }): JSX.Element => {
  return (
    <div>
      <p className={styles.title}>
        { props.title }
      </p>
    </div>
  )
}

export default Title