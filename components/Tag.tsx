import styles from '../styles/Tag.module.css'

const Tag = (props: { tag: string }): JSX.Element => {
  return (
    <span className={styles.tag}>{ props.tag }</span>
  )
}

export default Tag