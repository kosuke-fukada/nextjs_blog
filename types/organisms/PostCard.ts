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
    postHead: PostHead,
    href: InternalPath
  )
  {
    this.#postHead = postHead
    this.#href = href
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
