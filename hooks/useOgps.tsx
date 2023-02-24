import { useEffect, useState } from "react"
import { Href } from "../types/atoms/Href"
import { Ogp } from "../types/hooks/useOgp/Ogp"
import { isPreparedPropName } from "../types/hooks/useOgp/Prop"
import { useClient } from "./useClient"

export const useOgps = (href: Href) => {
  const [ogps, setOgps] = useState<Array<Ogp>>([])
  const isClient = useClient()
  useEffect(() => {
    const getOgps = async (): Promise<undefined | void> => {
      if (!href) {
        return
      }
      const source = await fetch(href.toString())
      const text = await source.text()
      const html = new DOMParser().parseFromString(text, 'text/html')
      const headEls = html.head.children
      setOgps(Array.from(headEls).map((headEl: Element): Ogp|false => {
        const content = headEl.getAttribute('content')
        const property = headEl.getAttribute('property')
        const prop = property ? property.replace('og:', '') : ''
        if (!property || !isPreparedPropName(prop) || !content) {
          return false
        }
        return new Ogp(
          prop,
          content,
        )
      }).filter((item: Ogp|false): boolean => {
        return item !== false
      }) as Array<Ogp>)
    }
    getOgps()
  }, [href, isClient])
  return ogps
}
