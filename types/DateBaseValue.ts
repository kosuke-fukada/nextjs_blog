export default abstract class DateBaseValue<T extends string>
{
  readonly type: T | undefined

  readonly #value: Date

  constructor(value: string)
  {
    if (!this.isValid(value)) {
      throw new Error()
    }
    this.#value = new Date(value)
  }

  protected abstract isValid(value: string): boolean

  toString(): string
  {
    const format = new Intl.DateTimeFormat(
      undefined,
      {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }
    )
    return format.format(this.#value).replace('/', '-')
  }
}