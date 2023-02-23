import StringBaseValue from "../StringBaseValue"

export class Title extends StringBaseValue<'Title'>
{
  constructor(value: string) {
    super(value)
  }

  protected isValid(value: string): boolean {
    return value.length > 0 && value.length <= 50
  }
}