import styles from '../../styles/atoms/Created.module.css'

const Created = (props: { created: string }): JSX.Element => {
  return (
    <span className={styles.created}>{ props.created }</span>
  )
}

export default Created