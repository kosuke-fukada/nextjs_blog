import styles from '../../styles/atoms/Tags.module.scss'
import { Tag } from '../../types/atoms/Tag'

const Tags = (props: { tags: Array<Tag> }): JSX.Element => {
  return (
    <div>
      {
        props.tags.map((tag: Tag, index: number): JSX.Element => {
          return (
            <span className={styles.tag} key={index}>{ tag.toString() }</span>
          )
        })
      }
    </div>
  )
}

export default Tags
