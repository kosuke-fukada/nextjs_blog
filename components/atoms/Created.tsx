import styles from '../../styles/atoms/Created.module.scss'

const Created = (props: { created: string }): JSX.Element => {
  return (
    <span className={styles.created}>{ props.created }</span>
  )
}

export default Created