export default abstract class StringBaseValue<T extends string> {
  readonly type: T | undefined

  readonly #value: string

  constructor(value: string) {
    if (!this.isValid(value)) {
      throw new Error()
    }
    this.#value = value
  }

  protected abstract isValid(value: string): boolean

  toString(): string {
    return this.#value
  }
}