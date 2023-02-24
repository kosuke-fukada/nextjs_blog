import { Body } from '../atoms/Body';
import { Created } from '../atoms/Created';
import { Tag } from '../atoms/Tag';
import { Title } from '../atoms/Title';
import { PostHead } from '../molecules/PostHead';

export class Post
{
  readonly #postHead: PostHead
  readonly #body: Body

  constructor(
    postHead: PostHead,
    body: Body,
  )
  {
    this.#postHead = postHead
    this.#body = body
  }

  postHead(): PostHead
  {
    return this.#postHead
  }

  body(): Body
  {
    return this.#body
  }
}
