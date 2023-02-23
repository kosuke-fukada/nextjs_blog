import { Created } from "../atoms/Created";
import { Tag } from "../atoms/Tag";
import { Title } from "../atoms/Title";

export class PostHead
{
  readonly #title: Title
  readonly #tags: Array<Tag>
  readonly #created: Created

  constructor(
    title: Title,
    tags: Array<Tag>,
    created: Created
  )
  {
    this.#title = title
    this.#tags = tags
    this.#created = created
  }

  title(): Title
  {
    return this.#title
  }

  tags(): Array<Tag>
  {
    return this.#tags
  }

  created(): Created
  {
    return this.#created
  }
}