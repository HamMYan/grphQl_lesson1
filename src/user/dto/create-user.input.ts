import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, {description:"User surname"})
  name: string

  @Field(() => String, {description:"User surname"})
  surname: string

  @Field(() => String, {description:"User email"})
  email: string

  @Field(() => Int, {description:"User age"})
  age: number
}
