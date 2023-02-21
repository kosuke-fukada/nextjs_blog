import ReactMarkdown from 'react-markdown';
import LinkCard from './LinkCard';

const Body = (props: { body: string }): JSX.Element => {
  
  return (
    <div id='content'>
      <ReactMarkdown
        children={props.body}
        components={{
          a({href}) {
            return (
              <LinkCard link={href} />
            )
          }
        }}
      />
    </div>
  )
}

export default Body