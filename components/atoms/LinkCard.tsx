import { useEffect, useState } from 'react'
import { useClient } from '../../hooks/useClient'
import styles from '../../styles/atoms/LinkCard.module.scss'
import { Href } from '../../types/atoms/Href'

const LinkCard = (props: { href: Href }): JSX.Element => {
  const [ogps, setOgps] = useState<Array<{
    prop: string,
    content: string
  }>>([])
  const isClient = useClient()
  useEffect(() => {
    const getOgps = async () => {
      if (!props.href) {
        return
      }
      const source = await fetch(props.href.toString())
      const text = await source.text()
      const html = new DOMParser().parseFromString(text, 'text/html')
      const headEls = html.head.children
      setOgps(Array.from(headEls).map(headEl => {
        const property = headEl.getAttribute('property')
        if (!property) {
          return {
            prop: '',
            content: '',
          }
        }
        return {
          prop: property.replace('og:', ''),
          content: headEl.getAttribute('content') ?? '',
        }
      }).filter(ogp => {
        return ogp.prop !== ''
      }))
    }
    getOgps()
  }, [props.href])

  const image = ogps.find(ogp => {
    return ogp.prop === 'image'
  })
  const title = ogps.find(ogp => {
    return ogp.prop === 'title'
  })
  const description = ogps.find(ogp => {
    return ogp.prop === 'description'
  })
  return (
    <>
      { isClient &&
        <a
          href={props.href.toString()}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.link_card_wrapper}>
            <img
              className={styles.link_card_image}
              src={image?.content ?? ''}
              alt={title?.content ?? ''}
            />
            <h3>{title?.content}</h3>
            <p className={styles.link_card_description}>{description?.content}</p>
          </div>
        </a>
      }
    </>
  )
}

export default LinkCard
