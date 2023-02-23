import { InternalPath } from '../atoms/InternalPath'
import { MenuListName } from '../atoms/MenuListName'

export class MenuListItem
{
  readonly #name: MenuListName
  readonly #link: InternalPath

  constructor(
    name: string,
    link: string
  )
  {
    this.#name = new MenuListName(name)
    this.#link = new InternalPath(link)
  }

  name(): MenuListName
  {
    return this.#name
  }

  link(): InternalPath
  {
    return this.#link
  }
}