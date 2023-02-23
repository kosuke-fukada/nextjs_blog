import StringBaseValue from '../StringBaseValue'

export class Body extends StringBaseValue<'Body'> {
  constructor(value: string) {
    super(value)
  }

  protected isValid(value: string): boolean
  {
    return value.length > 0
  }
}