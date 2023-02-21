import styles from '../../styles/atoms/Tags.module.scss'

const Tags = (props: { tags: Array<string> }): JSX.Element => {
  return (
    <div>
      {
        props.tags.map((tag: string, index: number) => {
          return (
            <span className={styles.tag} key={index}>{ tag }</span>
          )
        })
      }
    </div>
  )
}

export default Tags