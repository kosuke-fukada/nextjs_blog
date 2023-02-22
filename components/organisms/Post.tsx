import Body from '../atoms/Body'
import PostHead from '../molecules/PostHead'

const Post = (props: {
  title: string,
  tags: Array<string>,
  created: string,
  body: string
}): JSX.Element => {
  return (
    <div>
      <PostHead title={props.title} tags={props.tags} created={props.created} />
      <Body body={props.body} />
    </div>
  )
}

export default Post