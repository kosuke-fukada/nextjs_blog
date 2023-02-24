import { Post } from '../../types/organisms/Post'
import PostHead from '../molecules/PostHead'
import styles from '../../styles/organisms/PostCard.module.scss'
import Link from 'next/link'
import { PostCard as PostCardType } from '../../types/organisms/PostCard'

export const PostCard = (props: { post: PostCardType }) => {
  return (
    <Link href={props.post.href().toString()}>
      <div className={styles.post_card_wrapper}>
        <PostHead postHead={props.post.postHead()} />
      </div>
    </Link>
  )
}
