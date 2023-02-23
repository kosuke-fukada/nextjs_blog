import DateBaseValue from '../DateBaseValue'

export class Created extends DateBaseValue<'Created'>
{
  constructor(value: string)
  {
    super(value)
  }

  protected isValid(value: string): boolean {
    const regExp = /^20[2-9][3-9]\-(0[1-9]|11|12)\-(0[1-9]|[1-3][0-9]) [0-2][0-9]\:[0-5][0-9]\:[0-5][0-9]$/
    return new RegExp(regExp).test(value)
  }
}