import styles from '../styles/Title.module.css'

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