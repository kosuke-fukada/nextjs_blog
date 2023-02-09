import styles from '../../styles/atoms/Tags.module.css'

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