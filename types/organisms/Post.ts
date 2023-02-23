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
    title: string,
    tags: Array<string>,
    body: string,
    created: string
  )
  {
    this.#postHead = new PostHead(
      new Title(title),
      tags.map((tag: string) => {
        return new Tag(tag)
      }),
      new Created(created)
    )
    this.#body = new Body(body)
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