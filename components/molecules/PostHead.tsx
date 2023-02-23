import Created from '../atoms/Created'
import Tags from '../atoms/Tags'
import Title from '../atoms/Title'
import { PostHead as PostHeadType } from '../../types/molecules/PostHead'

const PostHead = (props: { postHead: PostHeadType }): JSX.Element => {
  return (
    <div>
      <Title title={props.postHead.title()} />
      <Created created={props.postHead.created()} />
      <Tags tags={props.postHead.tags()} />
    </div>
  )
}

export default PostHead