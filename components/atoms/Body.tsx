import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import LinkCard from './LinkCard';
import { isValidElement } from 'react';
import remarkGfm from 'remark-gfm';

const Body = (props: { body: string }): JSX.Element => {

  return (
    <div id='content'>
      <ReactMarkdown
        children={props.body}
        remarkPlugins={[remarkGfm]}
        components={{
          p({ children }) {
            if (
              Array.isArray(children)
              && children[0]
              && isValidElement(children[0])
              && children[0].props.node?.tagName === 'a'
            ) {
              return (
                <div>
                  {children}
                </div>
              )
            } else {
              return (
                <p>
                  {children}
                </p>
              )
            }
          },
          a({ href }) {
            return (
              <LinkCard link={href} />
            )
          },
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