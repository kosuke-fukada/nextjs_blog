import { Content } from './Content'
import { Prop } from './Prop'

export class Ogp
{
  readonly #prop: Prop
  readonly #content: Content

  constructor(
    prop: string,
    content: string
  )
  {
    this.#prop = new Prop(prop)
    this.#content = new Content(content)
  }

  prop(): Prop
  {
    return this.#prop
  }

  content(): Content
  {
    return this.#content
  }

  isEmpty(): boolean
  {
    return this.#prop.toString() === ''
  }
}
