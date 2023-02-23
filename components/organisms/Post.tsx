import { Post as PostType } from '../../types/organisms/Post'
import Body from '../atoms/Body'
import PostHead from '../molecules/PostHead'

const Post = (props: { post: PostType }): JSX.Element => {
  return (
    <div>
      <PostHead postHead={props.post.postHead()} />
      <Body body={props.post.body()} />
    </div>
  )
}

export default Post