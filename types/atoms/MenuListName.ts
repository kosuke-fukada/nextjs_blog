import StringBaseValue from '../StringBaseValue'

export class MenuListName extends StringBaseValue<'MenuListName'>
{
  constructor(value: string)
  {
    super(value)
  }

  protected isValid(value: string): boolean {
    return true
  }
}