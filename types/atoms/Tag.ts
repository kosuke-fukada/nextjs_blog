import StringBaseValue from '../StringBaseValue'

export class Tag extends StringBaseValue<'Tag'>
{
  constructor(value: string)
  {
    super(value)
  }

  protected isValid(value: string): boolean {
    return value.length > 0 && value.length <= 10
  }
}