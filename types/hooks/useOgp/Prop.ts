import StringBaseValue from '../../StringBaseValue'

export const preparedPropNames: string[] = ['title', 'type', 'description', 'image', 'url']

export class Prop extends StringBaseValue<'Prop'>
{
  constructor(value: string)
  {
    super(value)
  }

  protected isValid(value: string): boolean {
    return isPreparedPropName(value)
  }
}

export const isPreparedPropName = (value: string): boolean => {
  return preparedPropNames.includes(value)
}
