import { useEffect, useState } from "react"
import styles from '../../styles/atoms/LinkCard.module.scss'

const LinkCard = (props: { link: string|undefined }): JSX.Element => {
  const [ogps, setOgps] = useState<Array<{
    prop: string,
    content: string
  }>>([])
  useEffect(() => {
    const getOgps = async () => {
      if (!props.link) {
        return
      }
      const html = await fetch(props.link)
      const text = await html.text()
      const el = new DOMParser().parseFromString(text, 'text/html')
      const headEls = el.head.children
      setOgps(Array.from(headEls).map(headEl => {
        const property = headEl.getAttribute('property')
        if (!property) {
          return {
            prop: '',
            content: ''
          }
        }
        return {
          prop: property.replace('og:', ''),
          content: headEl.getAttribute('content') ?? ''
        }
      }).filter(ogp => {
        return ogp.prop !== ''
      }))
    }
    getOgps()
  }, [props.link])

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
    <a
      href={props.link}
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
  )
}

export default LinkCard