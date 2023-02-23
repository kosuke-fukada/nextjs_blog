import StringBaseValue from '../StringBaseValue'

export class InternalPath extends StringBaseValue<'InternalPath'>
{
  constructor(value: string)
  {
    super(value)
  }

  protected isValid(value: string): boolean {
    const regExp = /^\/.+/
    return new RegExp(regExp).test(value)
  }
}