import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import LinkCard from './LinkCard';

const Body = (props: { body: string }): JSX.Element => {

  return (
    <div id='content'>
      <ReactMarkdown
        children={props.body}
        components={{
          // TODO: Hydration error
          // a({href}) {
          //   return (
          //     <LinkCard link={href} />
          //   )
          // },
          code({ node, inline, className, children, style, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={atelierHeathDark}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  )
}

export default Body