import { useEffect, useState } from "react"
import { Href } from "../types/atoms/Href"
import { Ogp } from "../types/hooks/useOgp/Ogp"
import { propNames } from "../types/hooks/useOgp/Prop"
import { useClient } from "./useClient"

export const useOgps = (href: Href) => {
  const [ogps, setOgps] = useState<Array<Ogp>>([])
  const isClient = useClient()
  useEffect(() => {
    const getOgps = async () => {
      if (!href) {
        return
      }
      const source = await fetch(href.toString())
      const text = await source.text()
      const html = new DOMParser().parseFromString(text, 'text/html')
      const headEls = html.head.children
      setOgps(Array.from(headEls).map(headEl => {
        const property = headEl.getAttribute('property')
        if (!property || !propNames.includes(property.replace('og:', ''))) {
          return new Ogp(
            '',
            ''
          )
        }
        return new Ogp(
          property.replace('og:', ''),
          headEl.getAttribute('content') ?? '',
        )
      }).filter((ogp: Ogp): boolean => {
        return !ogp.isEmpty()
      }))
    }
    getOgps()
  }, [href, isClient])
  return ogps
}
