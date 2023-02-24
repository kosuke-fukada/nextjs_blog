import { useClient } from '../../hooks/useClient'
import styles from '../../styles/atoms/LinkCard.module.scss'
import { Href } from '../../types/atoms/Href'
import { useOgps } from '../../hooks/useOgps'
import { useMemo } from 'react'

const LinkCard = (props: { href: Href }): JSX.Element => {
  const isClient = useClient()
  const ogps = useOgps(props.href)

  const image = useMemo(() => {
    return ogps.find(ogp => {
      return ogp.prop().toString() === 'image'
    })
  }, [ogps])
  const title = useMemo(() => {
    return ogps.find(ogp => {
      return ogp.prop().toString() === 'title'
    })
  }, [ogps])
  const description = useMemo(() => {
    return ogps.find(ogp => {
      return ogp.prop().toString() === 'description'
    })
  }, [ogps])
  return (
    <>
      { isClient &&
        <a
          href={props.href.toString()}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.link_card_wrapper}>
            {image &&
              <img
                className={styles.link_card_image}
                src={image.content().toString() ?? ''}
                alt={title?.content().toString() ?? ''}
              />
            }
            {title &&
              <h3>{title.content().toString()}</h3>
            }
            {description &&
              <p className={styles.link_card_description}>{description.content().toString()}</p>
            }
          </div>
        </a>
      }
    </>
  )
}

export default LinkCard
