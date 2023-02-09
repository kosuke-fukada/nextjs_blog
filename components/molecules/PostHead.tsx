import Created from '../atoms/Created';
import Tags from '../atoms/Tags';
import Title from '../atoms/Title';

const PostHead = (props: {
  title: string,
  tags: Array<string>,
  created: string
}): JSX.Element => {
  return (
    <div>
      <Title title={props.title} />
      <Created created={props.created} />
      <Tags tags={props.tags} />
    </div>
  )
}

export default PostHead