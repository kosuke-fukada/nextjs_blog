import StringBaseValue from '../StringBaseValue'

export class Href extends StringBaseValue<'Href'>
{
  constructor(value: string)
  {
    super(value)
  }

  protected isValid(value: string): boolean {
    const regExp = /^https\:\/\/(www.)*[\w!?/+\-_~;.,*&@#$%()'[\]]+/
    return new RegExp(regExp).test(value)
  }
}