import { Created } from "../atoms/Created";
import { InternalPath } from "../atoms/InternalPath";
import { Tag } from "../atoms/Tag";
import { Title } from "../atoms/Title";
import { PostHead } from "../molecules/PostHead";

export class PostCard
{
  readonly #postHead: PostHead
  readonly #href: InternalPath

  constructor(
    title: string,
    tags: Array<string>,
    created: string,
    href: string
  )
  {
    this.#postHead = new PostHead(
      new Title(title),
      tags.map((tag: string) => {
        return new Tag(tag)
      }),
      new Created(created)
    )
    this.#href = new InternalPath(href)
  }

  postHead(): PostHead
  {
    return this.#postHead
  }

  href(): InternalPath
  {
    return this.#href
  }
}
