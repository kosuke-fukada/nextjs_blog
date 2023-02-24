import StringBaseValue from '../../StringBaseValue'

export const propNames: string[] = ['title', 'type', 'description', 'image', 'url']

export class Prop extends StringBaseValue<'Prop'>
{
  constructor(value: string)
  {
    super(value)
  }

  protected isValid(value: string): boolean {
    if (!value) {
      return true
    }
    return propNames.includes(value)
  }
}
