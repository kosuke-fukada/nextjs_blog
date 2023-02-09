import { marked } from 'marked';
import { useEffect } from 'react';

const Body = (props: { body: string }): JSX.Element => {
  useEffect(() => {
    const target = document.getElementById('content')
    if (target) {
      target.innerHTML = marked.parse(props.body)
    }
  }, [props.body])
  
  return (
    <div id='content'></div>
  )
}

export default Body