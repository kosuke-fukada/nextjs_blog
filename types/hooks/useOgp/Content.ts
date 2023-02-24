import StringBaseValue from "../../StringBaseValue";

export class Content extends StringBaseValue<'Content'>
{
  constructor(value: string)
  {
    super(value)
  }

  protected isValid(value: string): boolean {
    return value.length > 0
  }
}
